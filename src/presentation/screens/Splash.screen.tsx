import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import useSplash from '../hooks/useSplash';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import BgSplash from '../assets/images/bg-splash.png';
import ImgLogo from '../assets/images/logo-crkj-round.png';

const Splash = () => {
  // const _ = useSplash();

  return (
    <ImageBackground
      source={BgSplash}
      style={tw`flex-1 w-full min-h-full items-center justify-center`}>
      <View
        style={tw`border-l-2 border-slate-400 px-4 flex-row items-center gap-4`}>
        {/* <Text style={tw`font-primary--bold text-base text-slate-400`}>
          RM.SYNERGY
        </Text> */}
        <Image
          source={ImgLogo}
          resizeMethod="resize"
          resizeMode="contain"
          style={tw`w-12 h-12`}
        />
        <Text style={tw`font-primary--bold text-2xl text-black`}>CRKJ Sys</Text>
      </View>
      <Text style={tw`font-primary--regular text-sm text-slate-400`}>
        Versi 1.0
      </Text>
    </ImageBackground>
  );
};

export default Splash;
