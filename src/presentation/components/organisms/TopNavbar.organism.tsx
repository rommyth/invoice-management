import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from '../../../application/libs/tailwind/Tailwind.instance';
import {ChevronLeftIcon} from 'react-native-heroicons/solid';

type TopNavbarProps = {
  title?: string;
  action?: React.ReactNode;
};

const TopNavbar = ({title, action}: TopNavbarProps) => {
  return (
    <View style={tw`bg-white p-4 w-full flex-row items-center gap-4 shadow`}>
      <TouchableOpacity>
        <ChevronLeftIcon style={tw`text-slate-800`} size={20} />
      </TouchableOpacity>
      <Text style={tw`font-primary--semibold text-sm text-gray-800 flex-1`}>
        {title}
      </Text>
      {action}
    </View>
  );
};

export default TopNavbar;
