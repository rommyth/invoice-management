import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import TopNavbar from '../components/organisms/TopNavbar.organism';
import CommonInput from '../components/molecules/CommonInput.molecule';
import CommonButton from '../components/molecules/CommonButton.molecule';

const UpdateBulkProduct = () => {
  const _renderAsList = ({_, index}: any) => {
    const bgColor = index % 2;
    return (
      <View
        style={tw`flex-row items-center gap-4 p-4 ${
          bgColor ? 'bg-slate-100' : 'bg-white'
        }`}>
        <Text
          style={tw`flex-2 font-primary--semibold text-sm text-slate-800`}
          numberOfLines={2}>
          Nama Produk
        </Text>
        <View style={tw`flex-1`}>
          <CommonInput placeholder="Harga" />
        </View>
      </View>
    );
  };

  return (
    <View style={tw`flex-1 w-full min-h-full bg-slate-200`}>
      <TopNavbar title="Update Products" />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={[...Array(10)].fill('')}
        renderItem={_renderAsList}
      />
      <View style={tw`p-4`}>
        <CommonButton text="Save All" />
      </View>
    </View>
  );
};

export default UpdateBulkProduct;
