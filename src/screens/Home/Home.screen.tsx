import Logo from '@assets/svgs/LogoSvg';
import { Button, List } from '@components';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from 'src/navigation/types';
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
interface Props {
  navigation: NavigationProp;
}
const HomeScreen: React.FC<Props> = ({navigation}) => {
  const navigateHome = () => {
    navigation.navigate('WAITLIST');
  };
  return (
    <View className="bg-primary flex-1 gap-5 p-6">
      <View className="flex items-center">
        <Logo />
      </View>
      <Text className="text-left text-white">
        The world is undergoing a seismic shift in demographics. Populations are
        ageing at an unprecedented rate. In the midst of all this, some ask –
        why should we live long? And some are one step ahead. The changemakers.
        The ones who are beyond the why, and are hungry for the how.
      </Text>
      <Text className="text-2xl font-bold text-tertiary">
        A Holistic Approach to Longevity
      </Text>
      <Text className="text-white">
        Achieving longevity is not about singular fixes or fleeting trends. Our
        relationship won’t be short-term. It cannot be.
      </Text>
      <View>
        <Text className="text-white">
          It requires a comprehensive approach anchored in five key pillars of
          your life:
        </Text>
        <List
          items={[
            'Nutrition',
            'Exercise',
            'Sleep',
            'Stress Management',
            'Community',
          ]}
        />
      </View>
      <Button
        className="w-full rounded-md border-2 bg-secondary border-tertiary py-2"
        onPress={navigateHome}>
        <Text className="text-white font-bold text-center">
          Join the Waitlist
        </Text>
      </Button>
    </View>
  );
};

export default HomeScreen;
