import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import TopNavbar from '../components/organisms/TopNavbar.organism';
import CommonInput from '../components/molecules/CommonInput.molecule';
import CommonButton from '../components/molecules/CommonButton.molecule';
import useUpdateBulkProduct from '../hooks/useUpdateBulkProduct';
import {StorageProductTypes} from '../../application/libs/local-storage/storage';
import CommonCurrencyInput from '../components/molecules/CommonCurrencyInput.molecule';

const UpdateBulkProduct = () => {
  const {products, onChangePrice, onSubmitUpdate} = useUpdateBulkProduct();

  const _renderAsList = (item: StorageProductTypes, index: number) => {
    const bgColor = index % 2;
    return (
      <View
        style={tw`flex-row items-center gap-4 p-4 ${
          bgColor ? 'bg-slate-100' : 'bg-white'
        }`}>
        <View style={tw`flex-1`}>
          <Text
            style={tw`font-primary--semibold text-sm text-slate-800`}
            numberOfLines={2}>
            {item.product_name}
          </Text>
          <Text
            style={tw` font-primary--regular text-xs text-slate-500`}
            numberOfLines={2}>
            Serial: {item.product_serial ?? '-'}
          </Text>
        </View>
        <View style={tw`flex-1`}>
          <CommonCurrencyInput
            prefix={() => <Text style={tw`ml-4`}>Rp</Text>}
            value={item.product_price}
            onChangeText={v => onChangePrice(item.product_id, v as string)}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={tw`flex-1 w-full min-h-full bg-slate-200`}>
      <TopNavbar title="Update Products" />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={products}
        renderItem={({item, index}) => _renderAsList(item, index)}
      />
      <View style={tw`p-4`}>
        <CommonButton text="Save All" onPress={onSubmitUpdate} />
      </View>
    </View>
  );
};

export default UpdateBulkProduct;
