import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import useClient from '../hooks/useClient';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import BottomNavbar from '../components/organisms/BottomNavbar.oragnism';
import SearchInput from '../components/molecules/SearchInput.molecule';
import {PhoneIcon, PlusIcon} from 'react-native-heroicons/outline';
import {UserCircleIcon} from 'react-native-heroicons/solid';
import FloatingButton from '../components/molecules/FloatingButton.molecule';
import CommonListEmpty from '../components/molecules/CommonListEmpty.molecule';

const Client = () => {
  const {clients, navigateToCreateClient, navigateToDetailClient} = useClient();

  const _renderHeader = () => (
    <View
      style={tw`bg-slate-800 rounded-b-3xl p-4 flex-row items-center justify-between`}>
      <Text style={tw`font-primary--semibold text-xl text-white`}>Client</Text>
    </View>
  );

  return (
    <View style={tw`flex-1 bg-white`}>
      {_renderHeader()}

      <View style={tw`px-4 mt-2`}>
        <SearchInput />
      </View>

      <View style={tw`flex-1 mt-4`}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={clients}
          ListEmptyComponent={() => <CommonListEmpty />}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => navigateToDetailClient(item)}>
                <View style={tw`flex-row items-center gap-4 px-4 py-3`}>
                  <UserCircleIcon style={tw`text-slate-500`} size={40} />
                  <View>
                    <Text
                      style={tw`font-primary--semibold text-sm text-slate-800`}>
                      {item?.client_company_name}
                    </Text>
                    <View style={tw`flex-row items-center gap-1`}>
                      <PhoneIcon style={tw`text-slate-500`} size={12} />
                      <Text
                        style={tw`font-primary--regular text-xs text-slate-500`}>
                        {item?.client_phone}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <FloatingButton
        icon={<PlusIcon style={tw`text-white`} />}
        onPress={navigateToCreateClient}
      />
      <BottomNavbar />
    </View>
  );
};

export default Client;
