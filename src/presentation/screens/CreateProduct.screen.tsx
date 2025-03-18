import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import TopNavbar from '../components/organisms/TopNavbar.organism';
import CommonInput from '../components/molecules/CommonInput.molecule';
import useCreateProduct from '../hooks/useCreateProduct';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import CommonImagePicker from '../components/molecules/CommonImagePicker.molecule';
import CommonDropdown from '../components/molecules/CommonDropdown.molecule';
import CommonButton from '../components/molecules/CommonButton.molecule';

const CreateProduct = () => {
  const {onSubmit} = useCreateProduct();

  return (
    <View style={tw`flex-1 bg-white`}>
      <TopNavbar title="Create New Product" />
      <ScrollView>
        <View style={tw`gap-4 px-4`}>
          <CommonImagePicker />
          <CommonInput label="Nama" />
          <CommonInput label="Stok" />
          <CommonDropdown
            label="Kategori"
            renderItem={() => (
              <TouchableOpacity style={tw`p-2`}>
                <Text
                  style={tw`font-inter--regular text-sm text-black text-center`}>
                  Options
                </Text>
              </TouchableOpacity>
            )}
          />
          <CommonInput label="Nomor Serial" />
          <View style={tw`mt-5`} />
          <CommonButton text="Submit" onPress={onSubmit} />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateProduct;
