import {View, Text} from 'react-native';
import React, {ReactNode, useState} from 'react';
import tw from '../../../application/libs/tailwind/Tailwind.instance';
import CurrencyInput from 'react-native-currency-input';

interface CommonCurrencyInputTypes {
  label?: string;
  value?: number | string;
  disabled?: boolean;
  errorText?: string;
  suffix?: () => ReactNode;
  prefix?: () => ReactNode;
  onChangeText: (text: string | number) => void;
  height?: number;
}

const CommonCurrencyInput = ({
  value,
  label,
  errorText,
  disabled = false,
  suffix,
  prefix,
  onChangeText,
  height = 12,
}: CommonCurrencyInputTypes) => {
  const [isFocus, setIsFocus] = useState<Boolean>(false);

  const _renderLabel = () => {
    if (!label) return <></>;
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
        <CurrencyInput
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          editable={!disabled}
          value={Number(value)}
          precision={0}
          minValue={0}
          onChangeValue={v => onChangeText(v)}
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

export default CommonCurrencyInput;
