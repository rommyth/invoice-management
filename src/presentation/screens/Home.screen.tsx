import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import useHome from '../hooks/useHome';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import {PlusIcon, UserCircleIcon} from 'react-native-heroicons/solid';
import BottomNavbar from '../components/organisms/BottomNavbar.oragnism';
import SectionTitle from '../components/molecules/SectionTitle.molecule';
import {NewspaperIcon} from 'react-native-heroicons/outline';
import CommonListEmpty from '../components/molecules/CommonListEmpty.molecule';

const HomeScreen = () => {
  const layout = useWindowDimensions();
  const {products} = useHome();

  const _renderHeader = () => (
    <View
      style={tw`bg-slate-800 rounded-b-3xl p-4 pt-6 flex-row items-center justify-between`}>
      <View>
        <Text style={tw`font-primary--regular text-xs text-slate-400`}>
          Senin, 24 Maret 2025
        </Text>
        <Text style={tw`font-primary--semibold text-xl text-white`}>
          Welcome, Romi
        </Text>
      </View>
      <TouchableOpacity>
        <UserCircleIcon style={tw`text-white`} size={42} />
      </TouchableOpacity>
    </View>
  );

  const _renderProductSection = () => (
    <View style={tw`pt-6 pb-8 rounded-b-3xl bg-white`}>
      <SectionTitle
        title="Product"
        seeMoreText="See more"
        onPressSeeMore={() => {}}
      />
      <FlatList
        horizontal
        keyExtractor={(item, index) => index.toString()}
        data={products?.slice(0, 4)}
        ListEmptyComponent={() => (
          <View style={tw`w-[${layout.width - 32}px]`}>
            <CommonListEmpty />
          </View>
        )}
        ListHeaderComponent={() => <View style={tw`w-4`} />}
        ListFooterComponent={() => <View style={tw`w-4`} />}
        ItemSeparatorComponent={() => <View style={tw`w-2`} />}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={tw`rounded-xl overflow-hidden`}>
              <ImageBackground
                source={{uri: item.product_image ?? 'http://picsum.photos/200'}}
                resizeMethod="resize"
                resizeMode="cover"
                style={tw`w-32 h-50`}>
                <View style={tw`bg-black/30 rounded-md p-2`}>
                  <Text
                    style={tw`font-primary--semibold text-xs text-white`}
                    numberOfLines={1}>
                    {item.product_name}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );

  const _renderInvoiceSection = () => (
    <View style={tw`mt-12 p-4 rounded-3xl bg-white rounded-t-3xl h-full`}>
      <View
        style={tw`absolute -top-6 mx-4 w-full shadow-lg bg-white px-4 py-3 rounded-md flex-row items-center justify-between`}>
        <Text style={tw`font-primary--semibold text-sm text-slate-800`}>
          Have New Invoice?
        </Text>
        <TouchableOpacity
          style={tw`bg-slate-800 p-3 rounded-md flex-row items-center gap-2`}>
          <PlusIcon style={tw`text-white`} size={18} />
          <Text style={tw`font-primary--semibold text-xs text-white`}>
            Create Invoice
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        scrollEnabled={false}
        style={tw`mt-12`}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={tw`h-3`} />}
        ListFooterComponent={() => (
          <TouchableOpacity style={tw`mt-3 bg-slate-100 py-3`}>
            <Text
              style={tw`font-primary--regular text-sm text-slate-500 text-center`}>
              Lihat lainnya
            </Text>
          </TouchableOpacity>
        )}
        data={[...Array(5).fill('')]}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {}}
              style={tw`p-3 border-b border-slate-300 rounded-md flex-row items-center gap-4`}>
              <NewspaperIcon style={tw`text-slate-800`} size={28} />
              <View style={tw`flex-1`}>
                <Text style={tw`font-primary--semibold text-sm text-slate-800`}>
                  Nama Invoice
                </Text>
                <Text style={tw`font-primary--regular text-xs text-slate-500`}>
                  No. 9940930001
                </Text>
              </View>
              <View style={tw`bg-green-600 px-2 py-0.5 rounded`}>
                <Text style={tw`font-primary--medium text-xs text-white`}>
                  Paid
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );

  return (
    <View style={tw`flex-1 bg-slate-200`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {_renderHeader()}
        {_renderProductSection()}
        {_renderInvoiceSection()}

        <View style={tw`h-24`} />
      </ScrollView>

      <BottomNavbar />
    </View>
  );
};

export default HomeScreen;
