import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import {
  ArrowDownOnSquareStackIcon,
  ArrowUpOnSquareStackIcon,
  Square2StackIcon,
} from 'react-native-heroicons/outline';
import CommonButton from '../components/molecules/CommonButton.molecule';
import useProfile from '../hooks/useProfile';

const Profile = () => {
  const {onBackUpData, onRestoreData} = useProfile();

  const _renderHeader = () => (
    <View
      style={tw`bg-slate-800 rounded-b-3xl p-4 flex-row items-center justify-between`}>
      <Text style={tw`font-primary--semibold text-xl text-white`}>Profile</Text>
    </View>
  );

  const _renderUserAvatar = () => (
    <View style={tw`flex-row items-center gap-4 p-4 bg-white`}>
      <Image
        source={{uri: 'http://picsum.photos/200'}}
        resizeMethod="resize"
        resizeMode="cover"
        style={tw`rounded-full w-18 h-18 border-4 border-slate-800`}
      />
      <View>
        <Text style={tw`font-primary--bold text-base text-slate-800`}>
          Nama User
        </Text>
        <Text style={tw`font-primary--regular text-sm text-slate-500`}>
          081234567890
        </Text>
      </View>
    </View>
  );

  return (
    <View style={tw`flex-1 w-full bg-slate-200`}>
      {_renderHeader()}
      <ScrollView>
        {_renderUserAvatar()}
        <View style={tw`px-4 pt-4`}>
          <View style={tw`p-4 bg-white rounded-lg`}>
            <Text style={tw`font-primary--regular text-sm text-slate-500`}>
              Account
            </Text>
            <View style={tw`w-full bg-slate-300 h-[1px] my-2`} />
            <View>
              <TouchableOpacity style={tw`flex-row items-center gap-4 py-2`}>
                <Square2StackIcon style={tw`text-slate-500`} size={20} />
                <Text style={tw`font-primary--regular text-sm text-slate-800`}>
                  Option 1
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`flex-row items-center gap-4 py-2`}>
                <Square2StackIcon style={tw`text-slate-500`} size={20} />
                <Text style={tw`font-primary--regular text-sm text-slate-800`}>
                  Option 2
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={tw`px-4 pt-4`}>
          <View style={tw`p-4 bg-white rounded-lg`}>
            <Text style={tw`font-primary--regular text-sm text-slate-500`}>
              Backup / Restore
            </Text>
            <View style={tw`w-full bg-slate-300 h-[1px] my-2`} />
            <View>
              <TouchableOpacity
                onPress={onBackUpData}
                style={tw`flex-row items-center gap-4 py-2`}>
                <ArrowUpOnSquareStackIcon
                  style={tw`text-slate-500`}
                  size={20}
                />
                <Text style={tw`font-primary--regular text-sm text-slate-800`}>
                  Backup Data
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onRestoreData}
                style={tw`flex-row items-center gap-4 py-2`}>
                <ArrowDownOnSquareStackIcon
                  style={tw`text-slate-500`}
                  size={20}
                />
                <Text style={tw`font-primary--regular text-sm text-slate-800`}>
                  Restore Data
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={tw`p-4`}>
          <CommonButton text="Exit" bgColor="bg-red-500" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
