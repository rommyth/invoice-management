import {View, Text, TextInput} from 'react-native';
import React, {ReactNode, useState} from 'react';
import tw from '../../../application/libs/tailwind/Tailwind.instance';
import {
  Control,
  Controller,
  FieldErrors,
  RegisterOptions,
} from 'react-hook-form';

type CommonInputTypes = {
  control?: Control<any> | undefined;
  errors?: FieldErrors<any> | undefined;
  name: string;
  rules?:
    | Omit<
        RegisterOptions<any, any>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined;
  label?: string;
  placeholder?: string;
  suffix?: () => ReactNode;
  prefix?: () => ReactNode;
  disabled?: boolean;
  isSecure?: boolean;
};

const CommonInput = ({
  control,
  name,
  rules,
  errors,
  label,
  placeholder,
  suffix,
  prefix,
  disabled = false,
  isSecure = false,
}: CommonInputTypes) => {
  const [isFocus, setIsFocus] = useState<Boolean>(false);

  const _renderLabel = () => {
    return (
      <Text style={tw`font-primary--regular text-sm text-black`}>
        {label}
        {rules?.required ? <Text style={tw`text-red-500`}>*</Text> : ''}
      </Text>
    );
  };

  const _renderTextInput = () => {
    const borderColor = isFocus
      ? 'border-blue-700'
      : errors?.[name]?.message
      ? 'border-red-700'
      : 'border-gray-100';
    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, value}}) => (
          <View
            style={tw`bg-white border ${borderColor} rounded-lg bg-gray-100 w-full flex-row items-center h-14`}>
            {prefix?.()}
            <TextInput
              onFocus={() => setIsFocus(true)}
              secureTextEntry={isSecure}
              editable={!disabled}
              value={value}
              onChangeText={onChange}
              onBlur={() => setIsFocus(false)}
              placeholder={placeholder}
              placeholderTextColor={'#ababab'}
              style={tw`flex-1 px-4 h-full w-full font-primary--regular text-base text-black`}
            />
            {suffix?.()}
          </View>
        )}
      />
    );
  };

  const _renderTextError = () => {
    if (!errors?.[name]) {
      return null;
    }

    const message = errors?.[name].message?.toString() ?? '';

    return (
      <Text style={tw`font-primary--regular text-xs text-red-400`}>
        {message}
      </Text>
    );
  };

  return (
    <View style={tw`gap-1 w-full`}>
      {_renderLabel()}
      {_renderTextInput()}
      {_renderTextError()}
    </View>
  );
};

export default CommonInput;
