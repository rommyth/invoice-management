import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import TopNavbar from '../components/organisms/TopNavbar.organism';
import CommonInput from '../components/molecules/CommonInput.molecule';
import CommonButton from '../components/molecules/CommonButton.molecule';

const UpdateBulkProduct = () => {
  return (
    <View style={tw`flex-1 w-full min-h-full bg-slate-200`}>
      <TopNavbar title="Update Products" />
      <ScrollView>
        <View style={tw`p-4 gap-4`}>
          <View
            style={tw`bg-white border border-slate-300 rounded-md p-2 gap-2 shadow shadow-md`}>
            <Text style={tw`font-primary--semibold text-sm text-slate-800`}>
              Item Name 1
            </Text>
            <CommonInput label="Harga" />
          </View>
          <View
            style={tw`bg-white border border-slate-200 rounded-md p-2 gap-2 shadow shadow-md`}>
            <Text style={tw`font-primary--semibold text-sm text-slate-800`}>
              Item Name 2
            </Text>
            <CommonInput label="Harga" />
          </View>
        </View>
      </ScrollView>
      <View style={tw`p-4`}>
        <CommonButton text="Save All" />
      </View>
    </View>
  );
};

export default UpdateBulkProduct;
