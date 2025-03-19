import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import tw from '../../../application/libs/tailwind/Tailwind.instance';

type CommonButtonProps = {
  text: string;
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
}: CommonButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={isLoading ?? disabled}
      style={tw`rounded-md py-4 w-full ${
        isLoading || disabled ? 'bg-slate-500' : bgColor
      }`}>
      {isLoading ? (
        <ActivityIndicator color={'white'} size={'small'} />
      ) : (
        <Text
          style={tw`font-primary--semibold text-sm ${textColor} text-center`}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CommonButton;
