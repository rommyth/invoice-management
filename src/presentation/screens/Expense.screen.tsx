import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import useExpense from '../hooks/useExpense';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import BottomNavbar from '../components/organisms/BottomNavbar.oragnism';
import SearchInput from '../components/molecules/SearchInput.molecule';
import {DocumentArrowUpIcon, PlusIcon} from 'react-native-heroicons/outline';
import FloatingButton from '../components/molecules/FloatingButton.molecule';

const Expense = () => {
  const {navigateToCreateExpense} = useExpense();

  const _renderHeader = () => (
    <View
      style={tw`bg-slate-800 rounded-b-3xl p-4 flex-row items-center justify-between`}>
      <Text style={tw`font-primary--semibold text-xl text-white`}>Expense</Text>
    </View>
  );

  return (
    <View style={tw`flex-1 bg-white`}>
      {_renderHeader()}

      <View style={tw`px-4`}>
        <View style={tw`flex-row items-center items-center gap-2`}>
          <View style={tw`flex-1 w-full mt-2 bg-slate-800 rounded-lg p-3`}>
            <Text style={tw`font-primary--regular text-[10px] text-white`}>
              Today
            </Text>
            <Text style={tw`font-primary--bold text-base text-white`}>
              Rp 20.000
            </Text>
          </View>
          <View style={tw`flex-1 w-full mt-2 bg-slate-800 rounded-lg p-3`}>
            <Text style={tw`font-primary--regular text-[10px] text-white`}>
              This Month
            </Text>
            <Text style={tw`font-primary--bold text-base text-white`}>
              Rp 90.000
            </Text>
          </View>
        </View>
      </View>

      <View style={tw`px-4 mt-2`}>
        <SearchInput />
      </View>

      <View style={tw`mt-4 flex-1`}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={[...Array(5)].fill('')}
          ItemSeparatorComponent={() => (
            <View style={tw`w-full h-[1px] bg-slate-200`} />
          )}
          renderItem={() => {
            return (
              <TouchableOpacity>
                <View style={tw`p-4 flex-row items-center gap-4`}>
                  <DocumentArrowUpIcon style={tw`text-slate-800`} size={28} />
                  <View>
                    <Text
                      style={tw`font-primary--semibold text-sm text-slate-800`}>
                      Judul Expanse
                    </Text>
                    <Text
                      style={tw`font-primary--regular text-xs text-slate-500`}>
                      13 Februari 2025
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
        onPress={navigateToCreateExpense}
      />
      <BottomNavbar />
    </View>
  );
};

export default Expense;
