import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import useSplash from '../hooks/useSplash';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import BgSplash from '../assets/images/bg-splash.png';
import ImgLogo from '../assets/images/logo-crkj-full.png';

const Splash = () => {
  useSplash();

  return (
    <ImageBackground
      source={BgSplash}
      style={tw`flex-1 w-full min-h-full items-center justify-center`}>
      <Image
        source={ImgLogo}
        resizeMethod="resize"
        resizeMode="contain"
        style={tw`h-18`}
      />
      <Text style={tw`font-primary--regular text-sm text-slate-400`}>
        Versi 1.0
      </Text>
    </ImageBackground>
  );
};

export default Splash;
