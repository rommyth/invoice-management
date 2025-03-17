import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import useClient from '../hooks/useClient';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import BottomNavbar from '../components/organisms/BottomNavbar.oragnism';
import SearchInput from '../components/molecules/SearchInput.molecule';
import {PhoneIcon, PlusIcon} from 'react-native-heroicons/outline';
import {UserCircleIcon} from 'react-native-heroicons/solid';
import FloatingButton from '../components/molecules/FloatingButton.molecule';

const Client = () => {
  const {} = useClient();

  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`p-4`}>
        <Text style={tw`font-primary--semibold text-2xl text-slate-800`}>
          Client
        </Text>
      </View>

      <View style={tw`px-4`}>
        <SearchInput />
      </View>

      <View style={tw`flex-1 mt-4`}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={[...Array(5)].fill('')}
          renderItem={() => {
            return (
              <TouchableOpacity>
                <View style={tw`flex-row items-center gap-4 px-4 py-3`}>
                  <UserCircleIcon style={tw`text-slate-500`} size={40} />
                  <View>
                    <Text style={tw`font-primary--semibold text-sm text-`}>
                      Nama Client
                    </Text>
                    <View style={tw`flex-row items-center gap-1`}>
                      <PhoneIcon style={tw`text-slate-500`} size={12} />
                      <Text
                        style={tw`font-primary--regular text-xs text-slate-500`}>
                        087877884848
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <FloatingButton icon={<PlusIcon style={tw`text-white`} />} />
      <BottomNavbar />
    </View>
  );
};

export default Client;
