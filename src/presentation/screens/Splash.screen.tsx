import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import useSplash from '../hooks/useSplash';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import BgSplash from '../assets/images/bg-splash.png';

const Splash = () => {
  const _ = useSplash();

  return (
    <ImageBackground
      source={BgSplash}
      style={tw`flex-1 w-full min-h-full items-center justify-center`}>
      <View style={tw`border-l-2 border-slate-400 px-4`}>
        <Text style={tw`font-primary--bold text-base text-slate-400`}>
          RM.SYNERGY
        </Text>
        <Text style={tw`font-primary--bold text-2xl text-black`}>
          INVOICE MANAGEMENT
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Splash;
