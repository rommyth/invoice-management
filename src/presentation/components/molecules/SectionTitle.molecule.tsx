import {View, Text} from 'react-native';
import React from 'react';
import tw from '../../../application/libs/tailwind/Tailwind.instance';

type SectionTitleProps = {
  title: string;
  seeMoreText?: string;
  onPressSeeMore?: () => void;
};

const SectionTitle = ({
  title,
  seeMoreText,
  onPressSeeMore,
}: SectionTitleProps) => {
  return (
    <View style={tw`flex-row items-center justify-between p-4`}>
      <Text style={tw`font-primary--bold text-xl text-gray-800`}>{title}</Text>
      <Text
        onPress={onPressSeeMore}
        style={tw`font-primary--regular text-sm text-gray-500`}>
        {seeMoreText}
      </Text>
    </View>
  );
};

export default SectionTitle;
