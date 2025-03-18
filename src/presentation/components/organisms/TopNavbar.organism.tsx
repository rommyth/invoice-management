import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from '../../../application/libs/tailwind/Tailwind.instance';
import {ChevronLeftIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

type TopNavbarProps = {
  title?: string;
  action?: React.ReactNode;
};

const TopNavbar = ({title, action}: TopNavbarProps) => {
  const navigation = useNavigation();
  return (
    <View style={tw`bg-white p-4 w-full flex-row items-center gap-4 shadow`}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ChevronLeftIcon style={tw`text-slate-800`} size={20} />
      </TouchableOpacity>
      <Text style={tw`font-primary--semibold text-sm text-slate-800 flex-1`}>
        {title}
      </Text>
      {action}
    </View>
  );
};

export default TopNavbar;
