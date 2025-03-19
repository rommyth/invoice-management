import {View} from 'react-native';
import React from 'react';
import useCreateClient from '../hooks/useCreateClient';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import CommonInput from '../components/molecules/CommonInput.molecule';
import TopNavbar from '../components/organisms/TopNavbar.organism';
import CommonButton from '../components/molecules/CommonButton.molecule';
import CommonCurrencyInput from '../components/molecules/CommonCurrencyInput.molecule';

const CreateClient = () => {
  const {form, setForm, onSubmit} = useCreateClient();

  return (
    <View style={tw`flex-1 w-full bg-white`}>
      <TopNavbar title="Create New Client" />

      <View style={tw`flex-1 gap-4 p-4`}>
        <CommonInput
          label="Nama Perusahaan"
          value={form.client_company_name}
          onChangeText={text =>
            setForm(prev => ({...prev, client_company_name: text}))
          }
        />
        <CommonInput
          label="Nama PIC"
          value={form.client_pic_name}
          onChangeText={text =>
            setForm(prev => ({...prev, client_pic_name: text}))
          }
        />
        <CommonInput
          label="Email"
          value={form.client_email}
          onChangeText={text =>
            setForm(prev => ({...prev, client_email: text}))
          }
        />
        <CommonInput
          label="No. Handphone"
          keyboardType="number-pad"
          value={form.client_phone}
          onChangeText={text =>
            setForm(prev => ({...prev, client_phone: text}))
          }
        />
        <CommonInput
          label="Alamat"
          value={form.client_address}
          onChangeText={text =>
            setForm(prev => ({...prev, client_address: text}))
          }
        />
        <CommonCurrencyInput
          label="Fee"
          value={form.client_fee}
          onChangeText={text =>
            setForm(prev => ({...prev, client_fee: Number(text)}))
          }
        />
        <View style={tw`flex-1`} />
        <CommonButton text="Submit" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default CreateClient;
