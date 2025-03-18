import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  ListRenderItem,
} from 'react-native';
import React, {useState} from 'react';
import tw from '../../../application/libs/tailwind/Tailwind.instance';
import {ChevronDownIcon} from 'react-native-heroicons/solid';
import CommonListEmpty from './CommonListEmpty.molecule';
import CommonButton from './CommonButton.molecule';

interface CommonDropdownTypes {
  data?: Array<any>;
  label?: string;
  placeholder?: string;
  errorText?: string;
  disabled?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  renderItem: ListRenderItem<any> | null | undefined;
}

const CommonDropdown = ({
  data,
  errorText,
  label,
  placeholder,
  disabled = false,
  value,
  renderItem,
}: CommonDropdownTypes) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const _renderLabel = () => {
    if (!label) return null;
    return (
      <Text style={tw`font-primary--regular text-sm text-black`}>{label}</Text>
    );
  };

  const _renderTextInput = () => {
    const borderColor = errorText ? 'border-red-700' : 'border-slate-300';
    return (
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.8}
        onPress={toggleModal}
        style={tw`bg-white border ${borderColor} rounded-lg bg-slate-100 w-full flex-row items-center py-2.5`}>
        <Text
          style={tw`flex-1 px-4 h-full w-full font-primary--regular text-base ${
            value ? 'text-slate-800' : 'text-slate-400'
          }`}>
          {value ?? placeholder}
        </Text>
        <ChevronDownIcon style={tw`text-slate-800 mr-4`} size={18} />
      </TouchableOpacity>
    );
  };

  const _renderList = () => {
    return (
      <Modal
        visible={showModal}
        onRequestClose={toggleModal}
        backdropColor="#00000010">
        <View style={tw`flex-1 items-center justify-center`}>
          <View style={tw`bg-white w-4/5 p-4 max-h-[50%] rounded-md`}>
            <FlatList
              data={data}
              nestedScrollEnabled
              ListEmptyComponent={() => <CommonListEmpty />}
              ItemSeparatorComponent={() => (
                <View style={tw`w-full bg-slate-200 h-[1px]`} />
              )}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
            <CommonButton text="Close" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    );
  };

  const _renderTextError = () => {
    if (!errorText) {
      return null;
    }

    return (
      <Text style={tw`font-primary--regular text-xs text-red-400`}>
        {errorText}
      </Text>
    );
  };

  return (
    <View style={tw`gap-1 w-full`}>
      {_renderLabel()}
      {_renderTextInput()}
      {_renderList()}
      {_renderTextError()}
    </View>
  );
};

export default CommonDropdown;
