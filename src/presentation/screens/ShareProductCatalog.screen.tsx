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
import ViewShot from 'react-native-view-shot';
import moment from 'moment';
import ImgLogo from '../assets/images/logo-crkj-round.png';
import {
  StorageClientTypes,
  StorageProductTypes,
} from '../../application/libs/local-storage/storage';
import {toCurrency} from '../../application/utils/FormatPrice';
import CommonListEmpty from '../components/molecules/CommonListEmpty.molecule';

const ShareProductCatalog = () => {
  const {
    ref,
    columns,
    clients,
    products,
    selectedClient,
    setSelectedClient,
    setColumns,
    onShare,
  } = useShareProductCatalog();

  const _renderOptionsButton = () => (
    <View style={tw`flex-row items-center border-t border-slate-200`}>
      <TouchableOpacity
        onPress={() => setColumns(1)}
        style={tw`flex-1 flex-row items-center justify-center p-2 gap-1 ${
          columns === 1 ? 'bg-white' : 'bg-slate-200'
        }`}>
        <Bars3Icon style={tw`text-slate-800`} />
        <Text style={tw`font-primary--regular text-sm text-slate-800`}>
          List
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setColumns(3)}
        style={tw`flex-1 flex-row items-center justify-center p-2 gap-1 ${
          columns === 3 ? 'bg-white' : 'bg-slate-200'
        }`}>
        <Squares2X2Icon style={tw`text-slate-800`} />
        <Text style={tw`font-primary--regular text-sm text-slate-800`}>
          Column
        </Text>
      </TouchableOpacity>
    </View>
  );

  const _renderClient = () => {
    return (
      <CommonDropdown
        placeholder="Pilih Client"
        value={selectedClient?.client_company_name}
        data={clients}
        renderItem={({item}) => {
          const data = item as StorageClientTypes;
          return (
            <TouchableOpacity
              style={tw`p-2`}
              onPress={() => setSelectedClient(data)}>
              <Text
                style={tw`font-primary--regular text-sm text-slate-800 text-center`}>
                {data.client_company_name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  const _renderAsList = (item: StorageProductTypes, index: number) => {
    const bgColor = index % 2;
    return (
      <View
        style={tw`flex-row items-center gap-4 p-4 ${
          bgColor ? 'bg-white' : 'bg-slate-100'
        }`}>
        <Text
          style={tw`flex-1 font-primary--semibold text-sm text-slate-800`}
          numberOfLines={2}>
          {item.product_name}
        </Text>
        <Text style={tw`font-primary--semibold text-sm text-slate-800`}>
          {toCurrency(item.product_price + (selectedClient?.client_fee ?? 0))}
        </Text>
      </View>
    );
  };

  const _renderAsColumn = (item: StorageProductTypes, index: number) => {
    return (
      <View
        style={tw`flex-1 flex-col items-start gap-1 bg-slate-100 border border-slate-200 m-1 rounded-lg overflow-hidden`}>
        <Image
          source={{uri: item.product_image ?? ''}}
          resizeMethod="resize"
          resizeMode="cover"
          style={tw`w-full h-20 `}
        />
        <View style={tw`p-2 pt-1 h-17 justify-between`}>
          <Text
            style={tw`font-primary--regular text-xs/3 text-slate-800`}
            numberOfLines={2}>
            {item.product_name}
          </Text>
          <Text style={tw`font-primary--semibold text-xs text-slate-900`}>
            {toCurrency(item.product_price)}
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
        <ViewShot
          ref={ref}
          options={{fileName: 'KATALOG_', format: 'jpg', quality: 1}}>
          <View style={tw`p-4 gap-4 bg-white`}>
            <View>
              <View style={tw`items-center justify-center`}>
                <Image
                  source={ImgLogo}
                  resizeMethod="resize"
                  resizeMode="contain"
                  style={tw`w-12 h-12`}
                />
              </View>
              <Text
                style={tw`font-primary--bold text-lg text-slate-800 text-center`}>
                Katalog Produk
              </Text>
              <Text
                style={tw`font-primary--bold text-xs text-slate-500 text-center`}>
                {selectedClient?.client_company_name || '-'}
              </Text>
              <Text
                style={tw`font-primary--regular text-xs text-slate-500 text-center mt-2`}>
                Daftar harga produk per tanggal{' '}
                {moment(new Date().toString())
                  .locale('id')
                  .format('DD MMMM YYYY')}
              </Text>
            </View>
            <FlatList
              scrollEnabled={false}
              key={columns}
              keyExtractor={(item, index) => index.toString()}
              data={products?.filter(data => data?.product_price != 0)}
              ListEmptyComponent={() => <CommonListEmpty />}
              numColumns={columns}
              renderItem={({item, index}) => {
                switch (columns) {
                  case 1:
                    return _renderAsList(item, index);
                  case 3:
                    return _renderAsColumn(item, index);
                }
              }}
            />
          </View>
        </ViewShot>
      </ScrollView>
      <View style={tw`p-4`}>
        <CommonButton
          text="Share"
          prefix={<ShareIcon style={tw`text-white`} size={18} />}
          onPress={onShare}
        />
      </View>
    </View>
  );
};

export default ShareProductCatalog;
