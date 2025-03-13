import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import React from 'react';
import useHome from '../hooks/useHome';

const HomeScreen = () => {
  const {appName, isLoading, data} = useHome();

  return (
    <ScrollView>
      <Text style={{color: 'white'}}>{appName}</Text>
      <View>
        {isLoading ? (
          <ActivityIndicator color={'white'} />
        ) : (
          <Text style={{color: 'white'}}>{JSON.stringify(data, null, 4)}</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
