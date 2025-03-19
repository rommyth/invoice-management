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
  const {
    product,
    setProduct,
    isEditMode,
    toggleEditMode,
    onSubmitUpdate,
    onDelete,
  } = useDetailProduct();

  const _renderBottomButton = () => {
    if (isEditMode) {
      return (
        <View style={tw`flex-row items-center gap-2`}>
          <View style={tw`flex-1`}>
            <CommonButton
              text="Batal"
              bgColor="bg-slate-200"
              textColor="text-slate-500"
              onPress={toggleEditMode}
            />
          </View>
          <View style={tw`flex-1`}>
            <CommonButton text="Save" onPress={onSubmitUpdate} />
          </View>
        </View>
      );
    } else {
      return (
        <View style={tw`flex-row items-center gap-2`}>
          <View style={tw`flex-1`}>
            <CommonButton
              text="Delete"
              bgColor="bg-red-500"
              onPress={onDelete}
            />
          </View>
          <View style={tw`flex-3`}>
            <CommonButton text="Update" onPress={toggleEditMode} />
          </View>
        </View>
      );
    }
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      <TopNavbar title={isEditMode ? 'Update Product' : 'Detail Product'} />
      <ScrollView>
        <View style={tw`gap-4 p-4`}>
          <CommonImagePicker
            disabled={!isEditMode}
            uri={product.product_image ?? ''}
            onSelected={v =>
              setProduct(prev => ({...prev, product_image: v.uri}))
            }
          />
          <CommonInput
            disabled={!isEditMode}
            label="Nama"
            value={product.product_name}
            onChangeText={v => setProduct(prev => ({...prev, product_name: v}))}
          />
          <CommonInput
            disabled={!isEditMode}
            label="Stok"
            keyboardType="number-pad"
            value={product.product_stok.toString()}
            onChangeText={v =>
              setProduct(prev => ({...prev, product_stok: Number(v)}))
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
            disabled={!isEditMode}
            label="Nomor Serial"
            value={product.product_serial ?? ''}
            onChangeText={v =>
              setProduct(prev => ({...prev, product_serial: v}))
            }
          />
          <CommonCurrencyInput
            disabled={!isEditMode}
            label="Harga"
            value={product.product_price}
            onChangeText={v =>
              setProduct(prev => ({...prev, product_price: Number(v)}))
            }
          />
          <View style={tw`mt-5`} />
          {_renderBottomButton()}
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailProduct;
