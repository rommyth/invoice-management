import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import useClient from '../hooks/useClient';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import BottomNavbar from '../components/organisms/BottomNavbar.oragnism';
import SearchInput from '../components/molecules/SearchInput.molecule';
import {
  BanknotesIcon,
  EllipsisVerticalIcon,
  PhoneIcon,
  PlusIcon,
  ShareIcon,
} from 'react-native-heroicons/outline';
import {UserCircleIcon} from 'react-native-heroicons/solid';
import FloatingButton from '../components/molecules/FloatingButton.molecule';
import CommonListEmpty from '../components/molecules/CommonListEmpty.molecule';
import {toCurrency} from '../../application/utils/FormatPrice';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

const Client = () => {
  const {
    clients,
    navigateToCreateClient,
    navigateToDetailClient,
    navigateToShareProductCatalog,
  } = useClient();

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
                  <View style={tw`flex-1`}>
                    <Text
                      style={tw`font-primary--semibold text-sm text-slate-800`}>
                      {item?.client_company_name}
                    </Text>
                    <View style={tw`flex-row items-center gap-1`}>
                      <BanknotesIcon style={tw`text-slate-500`} size={12} />
                      <Text
                        style={tw`font-primary--regular text-xs text-slate-500`}>
                        {toCurrency(item?.client_fee)}
                      </Text>
                    </View>
                  </View>
                  <Menu>
                    <MenuTrigger>
                      <EllipsisVerticalIcon style={tw`text-slate-800`} />
                    </MenuTrigger>
                    <MenuOptions
                      customStyles={{optionsContainer: tw`p-2 w-auto`}}>
                      <MenuOption
                        onSelect={() => navigateToShareProductCatalog(item)}
                        style={tw`flex-row items-center gap-3`}>
                        <ShareIcon style={tw`text-slate-800`} size={18} />
                        <Text
                          style={tw`font-primary--regular text-sm text-slate-800`}>
                          Share Cataglog
                        </Text>
                      </MenuOption>
                    </MenuOptions>
                  </Menu>
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
