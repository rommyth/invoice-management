import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback} from 'react';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import TopNavbar from '../components/organisms/TopNavbar.organism';
import useShareProductCatalog from '../hooks/useShareProductCatalog';
import {Bars3Icon} from 'react-native-heroicons/solid';
import {ShareIcon, Squares2X2Icon} from 'react-native-heroicons/outline';
import CommonDropdown from '../components/molecules/CommonDropdown.molecule';
import CommonButton from '../components/molecules/CommonButton.molecule';

const ShareProductCatalog = () => {
  const {columns, setColumns} = useShareProductCatalog();

  const _renderOptionsButton = () => (
    <View style={tw`flex-row items-center border-t border-slate-200`}>
      <TouchableOpacity
        onPress={() => setColumns(1)}
        style={tw`flex-1 flex-row items-center justify-center p-2 gap-1 ${
          columns === 1 ? 'bg-white' : 'bg-slate-200'
        }`}>
        <Bars3Icon style={tw`text-slate-800`} />
        <Text style={tw`font-inter--regular text-sm text-slate-800`}>List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setColumns(3)}
        style={tw`flex-1 flex-row items-center justify-center p-2 gap-1 ${
          columns === 3 ? 'bg-white' : 'bg-slate-200'
        }`}>
        <Squares2X2Icon style={tw`text-slate-800`} />
        <Text style={tw`font-inter--regular text-sm text-slate-800`}>
          Column
        </Text>
      </TouchableOpacity>
    </View>
  );

  const _renderClient = () => {
    return (
      <CommonDropdown
        placeholder="Pilih Client"
        data={[1, 2, 3]}
        renderItem={() => <Text>123</Text>}
      />
    );
  };

  const _renderAsList = ({_, index}: any) => {
    const bgColor = index % 2;
    return (
      <View
        style={tw`flex-row items-center gap-4 px-2 py-1 ${
          bgColor ? 'bg-slate-100' : 'bg-white'
        }`}>
        <Image
          source={{uri: 'http://picsum.photos/200'}}
          resizeMethod="resize"
          resizeMode="cover"
          style={tw`w-10 h-10 rounded-md border border-slate-200 `}
        />
        <Text
          style={tw`flex-1 font-primary--semibold text-sm text-slate-800`}
          numberOfLines={2}>
          Nama Produk
        </Text>
        <Text style={tw`font-primary--semibold text-sm text-slate-800`}>
          Rp 1.000.000
        </Text>
      </View>
    );
  };

  const _renderAsColumn = ({_, index}: any) => {
    return (
      <View
        style={tw`flex-1 flex-col items-start gap-1 bg-slate-100 border border-slate-200 m-1 rounded-lg overflow-hidden`}>
        <Image
          source={{uri: 'http://picsum.photos/200'}}
          resizeMethod="resize"
          resizeMode="cover"
          style={tw`w-full h-20 `}
        />
        <View style={tw`p-2 pt-1 h-17 justify-between`}>
          <Text
            style={tw`font-primary--regular text-xs/3 text-slate-800`}
            numberOfLines={2}>
            Nama Produk qw eqwe
          </Text>
          <Text style={tw`font-primary--semibold text-xs text-slate-900`}>
            Rp 1.000.000
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={tw`flex-1 w-full min-h-full bg-white`}>
      <TopNavbar title="Share Product Catalog" />
      {_renderOptionsButton()}
      {_renderClient()}
      <ScrollView>
        <View style={tw`p-4 gap-4`}>
          <View>
            <Text style={tw`font-primary--bol text-xl text-slate-800`}>
              Katalog Produk
            </Text>
            <Text style={tw`font-primary--bol text-xs text-slate-500`}>
              Daftar katalog untuk PT ABC
            </Text>
          </View>
          <FlatList
            scrollEnabled={false}
            key={columns}
            keyExtractor={(item, index) => index.toString()}
            data={[...Array(10)].fill('')}
            numColumns={columns}
            renderItem={props => {
              switch (columns) {
                case 1:
                  return _renderAsList(props);
                case 3:
                  return _renderAsColumn(props);
              }
            }}
          />
        </View>
      </ScrollView>
      <View style={tw`p-4`}>
        <CommonButton
          text="Share"
          prefix={<ShareIcon style={tw`text-white`} size={18} />}
        />
      </View>
    </View>
  );
};

export default ShareProductCatalog;
