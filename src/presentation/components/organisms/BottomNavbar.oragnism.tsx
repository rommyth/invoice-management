import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from '../../../application/libs/tailwind/Tailwind.instance';
import {
  ArchiveBoxIcon,
  HomeIcon,
  UsersIcon,
  DocumentArrowUpIcon,
  NewspaperIcon,
} from 'react-native-heroicons/outline';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../application/navigations/RootStackTypes';

const pages = [
  {
    name: 'Home',
    path: 'Home',
    iconActive: <HomeIcon style={tw`text-white`} />,
    iconInactive: <HomeIcon />,
  },
  {
    name: 'Product',
    path: 'Product',
    iconActive: <ArchiveBoxIcon style={tw`text-white`} />,
    iconInactive: <ArchiveBoxIcon />,
  },
  {
    name: 'Client',
    path: 'Client',
    iconActive: <UsersIcon style={tw`text-white`} />,
    iconInactive: <UsersIcon />,
  },
  {
    name: 'Expense',
    path: 'Expense',
    iconActive: <DocumentArrowUpIcon style={tw`text-white`} />,
    iconInactive: <DocumentArrowUpIcon />,
  },
  {
    name: 'Invoice',
    path: 'Invoice',
    iconActive: <NewspaperIcon style={tw`text-white`} />,
    iconInactive: <NewspaperIcon />,
  },
];

const BottomNavbar = () => {
  const route: NativeStackScreenProps<RootStackParamList>['route'] = useRoute();
  const navigation: NativeStackScreenProps<RootStackParamList>['navigation'] =
    useNavigation();

  return (
    <View style={tw`absolute bottom-0 w-full p-4`}>
      <View
        style={tw`bg-white rounded-lg p-2 shadow-md flex-row items-center justify-center gap-2 border border-slate-200`}>
        {pages.map(page => {
          const isActive = route.name === page.path;
          return (
            <TouchableOpacity
              key={page.name}
              onPress={() => (isActive ? null : navigation.replace(page.path))}
              style={tw`flex-row items-center gap-2 py-2 px-3 rounded-md ${
                isActive ? 'bg-slate-800' : 'bg-white'
              } `}>
              <>
                {isActive ? page.iconActive : page.iconInactive}

                {isActive && (
                  <Text style={tw`font-primary--semibold text-xs text-white`}>
                    {page.name}
                  </Text>
                )}
              </>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BottomNavbar;
