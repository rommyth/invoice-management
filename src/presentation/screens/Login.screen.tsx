import React, {use} from 'react';
import {View, Text} from 'react-native';
import {useForm} from 'react-hook-form';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import CommonInput from '../components/molecules/CommonInput.molecule';
import CommonButton from '../components/molecules/CommonButton.molecule';
import useLogin from '../hooks/useLogin';

const Login = () => {
  const {control, errors, onSubmit} = useLogin();

  return (
    <View style={tw`flex-1 items-start justify-center p-6 bg-white`}>
      <Text style={tw`font-primary--bold text-4xl text-slate-600 py-1`}>
        Login
      </Text>
      <Text style={tw`font-primary--semibold text-base text-slate-600`}>
        Please Sign in to continue
      </Text>

      <View style={tw`h-5`} />

      <CommonInput label="Email" placeholder="Enter your email" />

      <View style={tw`h-5`} />

      <CommonInput
        label="Password"
        placeholder="Enter your password"
        isSecure={true}
      />

      <View style={tw`h-14`} />

      <CommonButton text="Login" onPress={onSubmit} />
    </View>
  );
};

export default Login;
