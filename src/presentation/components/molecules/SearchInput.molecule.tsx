import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {MagnifyingGlassIcon, XMarkIcon} from 'react-native-heroicons/outline';
import tw from '../../../application/libs/tailwind/Tailwind.instance';

type SearchInputProps = {
  value?: string;
  onChangeText?: (text: string) => void;
  onClear?: () => void;
};

const SearchInput = ({value, onChangeText, onClear}: SearchInputProps) => {
  return (
    <View
      style={tw`flex-row items-center gap-2 bg-slate-100 rounded-md px-4 border border-slate-200`}>
      <MagnifyingGlassIcon style={tw`text-slate-500`} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={tw`font-primary--regular text-sm text-slate-800 flex-1 p-3`}
        placeholder="Search here.."
        placeholderTextColor={'#ababab'}
      />
      {value && <XMarkIcon onPress={onClear} style={tw`text-slate-500`} />}
    </View>
  );
};

export default SearchInput;
