import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import TopNavbar from '../components/organisms/TopNavbar.organism';
import CommonInput from '../components/molecules/CommonInput.molecule';

import tw from '../../application/libs/tailwind/Tailwind.instance';
import CommonImagePicker from '../components/molecules/CommonImagePicker.molecule';
import CommonDropdown from '../components/molecules/CommonDropdown.molecule';
import CommonButton from '../components/molecules/CommonButton.molecule';
import CommonCurrencyInput from '../components/molecules/CommonCurrencyInput.molecule';
import useDetailProduct from '../hooks/useDetailProduct';

const DetailProduct = () => {
  const controller = useDetailProduct();

  const _renderBottomButton = () => {
    if (controller.isEditMode) {
      return (
        <View style={tw`flex-row items-center gap-2`}>
          <View style={tw`flex-1`}>
            <CommonButton
              text="Batal"
              bgColor="bg-slate-200"
              textColor="text-slate-500"
              onPress={controller.toggleEditMode}
            />
          </View>
          <View style={tw`flex-1`}>
            <CommonButton text="Save" />
          </View>
        </View>
      );
    } else {
      return (
        <View style={tw`flex-row items-center gap-2`}>
          <View style={tw`flex-1`}>
            <CommonButton text="Delete" bgColor="bg-red-500" />
          </View>
          <View style={tw`flex-3`}>
            <CommonButton text="Update" onPress={controller.toggleEditMode} />
          </View>
        </View>
      );
    }
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      <TopNavbar
        title={controller.isEditMode ? 'Update Product' : 'Detail Product'}
      />
      <ScrollView>
        <View style={tw`gap-4 p-4`}>
          <CommonImagePicker disabled={!controller.isEditMode} />
          <CommonInput disabled={!controller.isEditMode} label="Nama" />
          <CommonInput disabled={!controller.isEditMode} label="Stok" />
          {/* <CommonDropdown
            label="Kategori"
            renderItem={() => (
              <TouchableOpacity style={tw`p-2`}>
                <Text
                  style={tw`font-inter--regular text-sm text-black text-center`}>
                  Options
                </Text>
              </TouchableOpacity>
            )}
          /> */}
          <CommonInput disabled={!controller.isEditMode} label="Nomor Serial" />
          <CommonCurrencyInput
            disabled={!controller.isEditMode}
            label="Harga"
            value={controller.price}
            onChangeText={v => controller.setPrice(Number(v))}
          />
          <View style={tw`mt-5`} />
          {_renderBottomButton()}
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailProduct;
