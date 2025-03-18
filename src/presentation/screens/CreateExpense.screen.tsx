import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import useCreateExpense from '../hooks/useCreateExpense';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import CommonCurrencyInput from '../components/molecules/CommonCurrencyInput.molecule';
import CommonInput from '../components/molecules/CommonInput.molecule';
import CommonButton from '../components/molecules/CommonButton.molecule';
import TopNavbar from '../components/organisms/TopNavbar.organism';

const CreateExpense = () => {
  const {price, setPrice, onSubmit} = useCreateExpense();

  return (
    <View style={tw`flex-1 w-full bg-white`}>
      <TopNavbar title="Create New Expense" />
      <View style={tw`flex-1 gap-4 p-4`}>
        <CommonInput label="Judul" />
        <CommonInput label="Keterangan" multiline />
        <CommonCurrencyInput
          label="Nominal"
          value={price}
          onChangeText={v => setPrice(Number(v))}
        />
        <View style={tw`flex-1`} />
        <CommonButton text="Submit" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default CreateExpense;
