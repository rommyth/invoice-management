import {View, Text, Modal} from 'react-native';
import React from 'react';
import tw from '../../../application/libs/tailwind/Tailwind.instance';
import CommonButton from '../molecules/CommonButton.molecule';

type ModalConfirmationDeleteProps = {
  text: string;
  subtext?: string;
  onDelete?: () => void;
  visible: boolean;
  onClose: () => void;
};

const ModalConfirmationDelete = ({
  text,
  subtext,
  onDelete,
  visible = false,
  onClose,
}: ModalConfirmationDeleteProps) => {
  return (
    <Modal visible={visible} backdropColor="#00000010" onRequestClose={onClose}>
      <View style={tw`flex-1 items-center justify-center`}>
        <View
          style={tw`bg-white w-2/3 rounded-md p-4 items-center justify-center `}>
          <Text
            style={tw`font-primary--semibold text-base text-slate-800 text-center`}>
            {text}
          </Text>
          <Text
            style={tw`font-primary--regular text-xs text-slate-500 text-center mt-2`}>
            {subtext}
          </Text>
          <View style={tw`flex-row items-center gap-2 mt-9`}>
            <View style={tw`flex-1`}>
              <CommonButton
                text="Cancel"
                bgColor="bg-slate-200"
                textColor="text-slate-800"
                onPress={onClose}
              />
            </View>
            <View style={tw`flex-1`}>
              <CommonButton
                text="Delete"
                bgColor="bg-red-500"
                onPress={onDelete}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalConfirmationDelete;
