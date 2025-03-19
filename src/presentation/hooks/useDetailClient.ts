import React, {useEffect, useState} from 'react';
import {DetailClientScreenProps} from '../../application/navigations/RootStackTypes';
import {useNavigation} from '@react-navigation/native';
import {BackHandler} from 'react-native';

const useDetailClient = () => {
  const navigation: DetailClientScreenProps['navigation'] = useNavigation();

  const [isEditMode, setIsEditMode] = useState(false);
  const [fee, setFee] = useState(0);

  useEffect(() => {
    if (isEditMode) {
      const backAction = () => {
        toggleEditMode();
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => backHandler.remove();
    }
  }, [isEditMode]);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return {isEditMode, toggleEditMode, fee, setFee};
};

export default useDetailClient;
