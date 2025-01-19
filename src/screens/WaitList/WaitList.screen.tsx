import Logo from '@assets/svgs/LogoSvg';
import validateForm from '@lib/validateForm';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { RootStackParamList } from 'src/navigation/types';
import FormField from '../../components/FormField.component';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import { defaultForm } from '../../constant';
import { cn } from '../../lib/utils';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
interface Props {
  navigation: NavigationProp;
}
const initialState = {
  status: false,
  message: '',
  btnText: '',
  type: 'SUCCESS',
};
const WaitListScreen: React.FC<Props> = ({navigation}) => {
  const {colorScheme} = useColorScheme();
  const [isLoading, setIsLoading] = React.useState(false);
  const [values, setValues] = React.useState<{[key: string]: string}>({});
  const [errors, setErrors] = React.useState<{[key: string]: string}>({});
  const [modalValue, setModalValue] = React.useState(initialState);
  const formSubmit = () => {
    const validationErrors = validateForm(defaultForm, values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      // setModalValue({
      //   status: true,
      //   message: 'Please complete the required field.',
      //   btnText: 'Ok',
      //   type: 'FAILURE',
      // });
      return;
      // if (
      //   Object.keys(values).length !==
      //   Object.keys(defaultForm.map(a => a.required)).length
      // ) {
    }
    setIsLoading(true);
    setTimeout(() => {
      setModalValue({
        status: true,
        message:
          'Thank you for submitting your form. We have successfully received your request and placed you on our waitlist. Our team will review your information and get back to you as soon as possible. We appreciate your patience and look forward to connecting with you soon!',
        btnText: 'Thanks',
        type: 'SUCCESS',
      });
      setIsLoading(false);
    }, 1000);
  };
  const navigateHome = () => {
    if (modalValue.type === 'FAILURE') {
      setModalValue({status: false, message: '', btnText: '', type: ''});
      setIsLoading(false);
    } else {
      setModalValue({status: false, message: '', btnText: '', type: ''});
      navigation.navigate('HOME');
    }
  };
  return (
    <View className="bg-primary flex-1 gap-5 p-6">
      <View className="flex items-center">
        <Logo />
      </View>
      <View className="gap-5">
        <View className="gap-4">
          {defaultForm.map((field, index) => (
            <FormField
              key={`${field.id}${index}`}
              {...field}
              value={values[field.id] ?? ''}
              error={errors[field.id]}
              onChange={val => {
                const newState = {...errors};
                delete newState[field.id];
                setErrors(newState);
                setValues(prev => ({...prev, [field.id]: val.toString()}));
              }}
            />
          ))}
        </View>
        <Button
          className="w-full rounded-md bg-secondary border-2 border-tertiary py-2"
          onPress={formSubmit}>
          <Text className="text-white text-center font-bold">Join Now</Text>
        </Button>
      </View>
      <Modal
        modalVisible={modalValue.status || isLoading}
        onBackdropPress={() => setModalValue(initialState)}>
        {isLoading ? (
          <View className="min-h-[100px] items-center justify-center">
            <ActivityIndicator className="" size="large" color="#efc756" />
          </View>
        ) : (
          <View className="bg-white w-full p-4 gap-4 rounded-lg items-center">
            <Text
              className={cn(
                'font-bold',
                colorScheme === 'dark' ? 'text-black' : 'text-black',
              )}>
              {modalValue.message}
            </Text>
            <Button
              className="bg-secondary py-2 border-2 border-tertiary px-5"
              onPress={navigateHome}>
              <Text className="text-white text-center font-bold">
                {modalValue.btnText}
              </Text>
            </Button>
          </View>
        )}
      </Modal>
    </View>
  );
};

export default WaitListScreen;
