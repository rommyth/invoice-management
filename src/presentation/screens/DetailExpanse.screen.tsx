import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import useDetailExpense from '../hooks/useDetailExpense';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import CommonCurrencyInput from '../components/molecules/CommonCurrencyInput.molecule';
import CommonInput from '../components/molecules/CommonInput.molecule';
import CommonButton from '../components/molecules/CommonButton.molecule';
import TopNavbar from '../components/organisms/TopNavbar.organism';

const DetailExpense = () => {
  const {price, setPrice, onSubmit, isEditMode, toggleEditMode} =
    useDetailExpense();

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
            <CommonButton text="Save" onPress={() => {}} />
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
              onPress={() => {}}
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
    <View style={tw`flex-1 w-full bg-white`}>
      <TopNavbar title={isEditMode ? 'Edit Expense' : 'Create New Expense'} />
      <View style={tw`flex-1 gap-4 p-4`}>
        <CommonInput disabled={!isEditMode} label="Judul" />
        <CommonInput disabled={!isEditMode} label="Keterangan" multiline />
        <CommonCurrencyInput
          disabled={!isEditMode}
          label="Nominal"
          value={price}
          onChangeText={v => setPrice(Number(v))}
        />
        <View style={tw`flex-1`} />
        {_renderBottomButton()}
      </View>
    </View>
  );
};

export default DetailExpense;
