import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import TopNavbar from '../components/organisms/TopNavbar.organism';
import CommonInput from '../components/molecules/CommonInput.molecule';
import useCreateProduct from '../hooks/useCreateProduct';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import CommonImagePicker from '../components/molecules/CommonImagePicker.molecule';
import CommonDropdown from '../components/molecules/CommonDropdown.molecule';
import CommonButton from '../components/molecules/CommonButton.molecule';
import CommonCurrencyInput from '../components/molecules/CommonCurrencyInput.molecule';

const CreateProduct = () => {
  const {form, setForm, onSubmit} = useCreateProduct();

  return (
    <View style={tw`flex-1 bg-white`}>
      <TopNavbar title="Create New Product" />
      <ScrollView>
        <View style={tw`gap-4 p-4`}>
          <CommonImagePicker
            uri={form.product_image as string}
            onSelected={v => setForm(prev => ({...prev, product_image: v.uri}))}
            onClear={() => setForm(prev => ({...prev, product_image: ''}))}
          />
          <CommonInput
            label="Nama"
            value={form.product_name}
            onChangeText={v => setForm(prev => ({...prev, product_name: v}))}
          />
          <CommonInput
            label="Stok"
            keyboardType="number-pad"
            value={form.product_stok.toString()}
            onChangeText={v =>
              setForm(prev => ({...prev, product_stok: Number(v)}))
            }
          />
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
          <CommonInput
            label="Nomor Serial"
            value={form.product_serial as string}
            onChangeText={v => setForm(prev => ({...prev, product_serial: v}))}
          />
          <CommonCurrencyInput
            label="Harga"
            value={form.product_price}
            onChangeText={v =>
              setForm(prev => ({...prev, product_price: Number(v)}))
            }
          />
          <View style={tw`mt-5`} />
          <CommonButton text="Submit" onPress={onSubmit} />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateProduct;
