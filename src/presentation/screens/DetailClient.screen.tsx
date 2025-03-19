import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import TopNavbar from '../components/organisms/TopNavbar.organism';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import CommonInput from '../components/molecules/CommonInput.molecule';
import CommonCurrencyInput from '../components/molecules/CommonCurrencyInput.molecule';
import useDetailClient from '../hooks/useDetailClient';
import CommonButton from '../components/molecules/CommonButton.molecule';

const DetailClient = () => {
  const {
    isEditMode,
    toggleEditMode,
    client,
    setClient,
    onSubmitUpdate,
    onDeleteClient,
  } = useDetailClient();

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
              onPress={onDeleteClient}
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
      <TopNavbar title={isEditMode ? 'Update Client' : 'Detail Client'} />
      <ScrollView>
        <View style={tw`flex-1 gap-4 p-4`}>
          <CommonInput
            disabled={!isEditMode}
            label="Nama Perusahaan"
            value={client.client_company_name}
            onChangeText={text =>
              setClient(prev => ({...prev, client_company_name: text}))
            }
          />
          <CommonInput
            disabled={!isEditMode}
            label="Nama PIC"
            value={client.client_pic_name}
            onChangeText={text =>
              setClient(prev => ({...prev, client_pic_name: text}))
            }
          />
          <CommonInput
            disabled={!isEditMode}
            label="Email"
            value={client.client_email}
            onChangeText={text =>
              setClient(prev => ({...prev, client_email: text}))
            }
          />
          <CommonInput
            disabled={!isEditMode}
            label="No. Handphone"
            keyboardType="number-pad"
            value={client.client_phone}
            onChangeText={text =>
              setClient(prev => ({...prev, client_phone: text}))
            }
          />
          <CommonInput
            disabled={!isEditMode}
            label="Alamat"
            value={client.client_address}
            onChangeText={text =>
              setClient(prev => ({...prev, client_address: text}))
            }
          />
          <CommonCurrencyInput
            disabled={!isEditMode}
            label="Fee"
            value={client.client_fee}
            onChangeText={v =>
              setClient((prev: any) => ({...prev, client_fee: Number(v)}))
            }
          />
          <View style={tw`flex-1`} />
          {_renderBottomButton()}
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailClient;
