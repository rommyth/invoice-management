import {useEffect, useState} from 'react';
import {BackHandler} from 'react-native';

const useDetailExpense = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [price, setPrice] = useState(0);

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

  const onSubmit = () => {};

  return {price, setPrice, onSubmit, isEditMode, toggleEditMode};
};

export default useDetailExpense;
