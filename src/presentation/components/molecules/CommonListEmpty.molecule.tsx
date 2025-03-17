import {View, Text} from 'react-native';
import React from 'react';
import {FolderMinusIcon} from 'react-native-heroicons/outline';
import tw from '../../../application/libs/tailwind/Tailwind.instance';

const CommonListEmpty = () => {
  return (
    <View style={tw`items-center justify-center py-8`}>
      <FolderMinusIcon style={tw`text-slate-500`} size={32} />
      <Text style={tw`font-primary--regular text-sm text-slate-500`}>
        Tidak ada list saat ini
      </Text>
    </View>
  );
};

export default CommonListEmpty;
