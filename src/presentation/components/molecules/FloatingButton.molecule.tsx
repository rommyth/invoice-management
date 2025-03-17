import {TouchableOpacity} from 'react-native';
import React from 'react';
import tw from '../../../application/libs/tailwind/Tailwind.instance';

type FloatingButtonProps = {
  icon: React.ReactNode;
  onPress?: () => void;
};

const FloatingButton = ({icon, onPress}: FloatingButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`absolute bottom-22 right-4 w-14 h-14 items-center justify-center rounded-md shadow-md bg-slate-800`}>
      {icon}
    </TouchableOpacity>
  );
};

export default FloatingButton;
