import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import useCreateClient from '../hooks/useCreateClient';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import CommonInput from '../components/molecules/CommonInput.molecule';
import TopNavbar from '../components/organisms/TopNavbar.organism';
import CommonButton from '../components/molecules/CommonButton.molecule';
import CommonCurrencyInput from '../components/molecules/CommonCurrencyInput.molecule';

const CreateClient = () => {
  const {fee, setFee, onSubmit} = useCreateClient();

  return (
    <View style={tw`flex-1 w-full bg-white`}>
      <TopNavbar title="Create New Client" />

      <View style={tw`flex-1 gap-4 p-4`}>
        <CommonInput label="Nama Perusahaan" />
        <CommonInput label="Nama PIC" />
        <CommonInput label="Email" />
        <CommonInput label="No. Handphone" keyboardType="number-pad" />
        <CommonInput label="Alamat" />
        <CommonCurrencyInput
          label="Fee"
          value={fee}
          onChangeText={v => setFee(Number(v))}
        />
        <View style={tw`flex-1`} />
        <CommonButton text="Submit" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default CreateClient;
