import {View, Text} from 'react-native';
import React from 'react';
import TopNavbar from '../components/organisms/TopNavbar.organism';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import CommonInput from '../components/molecules/CommonInput.molecule';
import CommonCurrencyInput from '../components/molecules/CommonCurrencyInput.molecule';
import useDetailClient from '../hooks/useDetailClient';
import CommonButton from '../components/molecules/CommonButton.molecule';

const DetailClient = () => {
  const {isEditMode, toggleEditMode, fee, setFee} = useDetailClient();

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
            <CommonButton text="Save" />
          </View>
        </View>
      );
    } else {
      return (
        <View style={tw`flex-row items-center gap-2`}>
          <View style={tw`flex-1`}>
            <CommonButton text="Delete" bgColor="bg-red-500" />
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
      <TopNavbar title={isEditMode ? 'Update Client' : 'Detail Client'} />
      <View style={tw`flex-1 gap-4 p-4`}>
        <CommonInput disabled={!isEditMode} label="Nama Perusahaan" />
        <CommonInput disabled={!isEditMode} label="Nama PIC" />
        <CommonInput disabled={!isEditMode} label="Email" />
        <CommonInput
          disabled={!isEditMode}
          label="No. Handphone"
          keyboardType="number-pad"
        />
        <CommonInput disabled={!isEditMode} label="Alamat" />
        <CommonCurrencyInput
          disabled={!isEditMode}
          label="Fee"
          value={fee}
          onChangeText={v => setFee(Number(v))}
        />
        <View style={tw`flex-1`} />
        {_renderBottomButton()}
      </View>
    </View>
  );
};

export default DetailClient;
