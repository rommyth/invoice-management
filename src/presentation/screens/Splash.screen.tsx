import {View, Text} from 'react-native';
import React from 'react';
import useSplash from '../hooks/useSplash';
import tw from '../../application/libs/tailwind/Tailwind.instance';

const Splash = () => {
  //   const _ = useSplash();

  return (
    <View
      style={tw`flex-1 w-full min-h-full bg-gray-300 items-center justify-center`}>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;
