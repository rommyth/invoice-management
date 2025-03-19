import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import tw from '../../../application/libs/tailwind/Tailwind.instance';

type CommonButtonProps = {
  text: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onPress?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  bgColor?: string;
  textColor?: string;
};

const CommonButton = ({
  text,
  onPress,
  isLoading,
  disabled = false,
  bgColor = 'bg-slate-800',
  textColor = 'text-white',
  prefix,
  suffix,
}: CommonButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={isLoading ?? disabled}
      style={tw`rounded-md py-4 w-full flex-row items-center justify-center gap-2 ${
        isLoading || disabled ? 'bg-slate-500' : bgColor
      }`}>
      {isLoading ? (
        <ActivityIndicator color={'white'} size={'small'} />
      ) : (
        <>
          {prefix}
          <Text
            style={tw`font-primary--semibold text-sm ${textColor} text-center`}>
            {text}
          </Text>
          {suffix}
        </>
      )}
    </TouchableOpacity>
  );
};

export default CommonButton;
