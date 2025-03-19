import {View, Text, TextInput, KeyboardTypeOptions} from 'react-native';
import React, {ReactNode, useState} from 'react';
import tw from '../../../application/libs/tailwind/Tailwind.instance';

interface CommonInputTypes {
  label?: string;
  placeholder?: string;
  errorText?: string;
  suffix?: () => ReactNode;
  prefix?: () => ReactNode;
  disabled?: boolean;
  isSecure?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  multiline?: boolean;
  height?: number;
}

const CommonInput = ({
  errorText,
  label,
  placeholder,
  suffix,
  prefix,
  disabled = false,
  isSecure = false,
  value,
  onChangeText,
  keyboardType,
  multiline,
  height = 12,
}: CommonInputTypes) => {
  const [isFocus, setIsFocus] = useState<Boolean>(false);

  const _renderLabel = () => {
    if (!label) return null;
    return (
      <Text style={tw`font-primary--regular text-sm text-black`}>{label}</Text>
    );
  };

  const _renderTextInput = () => {
    const borderColor = isFocus
      ? 'border-blue-700'
      : errorText
      ? 'border-red-700'
      : 'border-slate-300';
    return (
      <View
        style={tw`bg-white border ${borderColor} rounded-lg bg-slate-100 w-full flex-row items-center h-${height}`}>
        {prefix?.()}
        <TextInput
          onFocus={() => setIsFocus(true)}
          secureTextEntry={isSecure}
          editable={!disabled}
          value={value}
          multiline={multiline}
          onChangeText={onChangeText}
          onBlur={() => setIsFocus(false)}
          placeholder={placeholder}
          placeholderTextColor={'#ababab'}
          keyboardType={keyboardType}
          style={tw`flex-1 px-4 h-full w-full font-primary--regular text-base text-black`}
        />
        {suffix?.()}
      </View>
    );
  };

  const _renderTextError = () => {
    if (!errorText) {
      return null;
    }

    return (
      <Text style={tw`font-primary--regular text-xs text-red-400`}>
        {errorText}
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
