import {
  View,
  Text,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import useProduct from '../hooks/useProduct';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import BottomNavbar from '../components/organisms/BottomNavbar.oragnism';
import TopNavbar from '../components/organisms/TopNavbar.organism';
import {MagnifyingGlassIcon, XMarkIcon} from 'react-native-heroicons/solid';
import SearchInput from '../components/molecules/SearchInput.molecule';
import FloatingButton from '../components/molecules/FloatingButton.molecule';
import {PlusIcon} from 'react-native-heroicons/outline';

const Product = () => {
  const {navigateToCreateProduct} = useProduct();

  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`p-4`}>
        <Text style={tw`font-primary--semibold text-2xl text-slate-800`}>
          Product
        </Text>
      </View>

      <View style={tw`px-4`}>
        <SearchInput />
      </View>

      <View style={tw`flex-1 mt-4`}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={[...Array(10).fill('')]}
          ItemSeparatorComponent={() => (
            <View style={tw`w-full h-[1px] bg-slate-300`} />
          )}
          ListFooterComponent={() => <View style={tw`h-24`} />}
          renderItem={() => {
            return (
              <TouchableOpacity>
                <View style={tw`flex-row items-start gap-4 px-4 py-3`}>
                  <Image
                    source={{uri: 'http://picsum.photos/200'}}
                    resizeMethod="resize"
                    resizeMode="cover"
                    style={tw`w-18 h-18 border border-slate-200 rounded-md`}
                  />
                  <View style={tw`flex-1`}>
                    <Text
                      style={tw`font-primary--semibold text-sm text-slate-800`}>
                      Nama Item
                    </Text>
                    <Text
                      style={tw`font-primary--regular text-xs text-slate-500`}>
                      Kategori
                    </Text>
                    <Text
                      style={tw`font-primary--bold text-xl text-slate-800 mt-2`}>
                      Rp 99.999.999
                    </Text>
                  </View>
                  <View style={tw`bg-slate-200 px-1.5 py-0.5 rounded-sm`}>
                    <Text
                      style={tw`font-primary--semibold text-[10px] text-slate-800`}>
                      Stok : 1
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <FloatingButton
        icon={<PlusIcon style={tw`text-white`} />}
        onPress={navigateToCreateProduct}
      />
      <BottomNavbar />
    </View>
  );
};

export default Product;
