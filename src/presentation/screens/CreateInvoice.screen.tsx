import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import useCreateInvoice from '../hooks/useCreateInvoice';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import TopNavbar from '../components/organisms/TopNavbar.organism';
import CommonInput from '../components/molecules/CommonInput.molecule';
import CommonDropdown from '../components/molecules/CommonDropdown.molecule';
import CommonButton from '../components/molecules/CommonButton.molecule';
import {PlusIcon} from 'react-native-heroicons/solid';
import {TrashIcon} from 'react-native-heroicons/outline';

const CreateInvoice = () => {
  const {} = useCreateInvoice();

  return (
    <View style={tw`flex-1 w-full min-h-full bg-white`}>
      <TopNavbar title="Create New Invoice" />
      <ScrollView>
        <View style={tw`p-4 gap-4`}>
          <CommonInput label="Judul" />
          <CommonInput label="Keterangan" multiline />
          <CommonDropdown label="Client" renderItem={() => <Text>123</Text>} />
          <View>
            <Text style={tw`font-primary--regylar text-sm text-slate-800`}>
              Produk
            </Text>
            {/* Item */}
            {[...Array(5)].map(() => (
              <View style={tw`gap-3 mt-2 flex-row items-center`}>
                <View style={tw`flex-3`}>
                  <CommonDropdown
                    placeholder="Pilih"
                    renderItem={() => <Text>123</Text>}
                  />
                </View>
                <View style={tw`flex-1`}>
                  <CommonInput placeholder="Qty" />
                </View>
                <TrashIcon style={tw`text-red-500`} />
              </View>
            ))}
            <TouchableOpacity
              style={tw` flex-row items-center justify-center gap-1 p-2 mt-4 rounded-md border border-slate-500`}>
              <PlusIcon style={tw`text-slate-800`} size={18} />
              <Text style={tw`font-inter--regular text-sm text-slate-800`}>
                Tambah
              </Text>
            </TouchableOpacity>
          </View>
          <CommonInput label="Total Price" placeholder="Total Price" disabled />
          <CommonDropdown
            label="Status Invoice"
            renderItem={() => <Text>123</Text>}
          />
          <View style={tw`w-full bg-slate-300 h-[1px] my-2`} />
          <CommonButton text="Submit" />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateInvoice;
