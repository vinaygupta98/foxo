import { cn } from '@lib/utils';
import React from 'react';
import { View } from 'react-native';
import Checkbox from './ui/Checkbox';
import Input from './ui/Input';
import Switch from './ui/Switch';
import Text from './ui/Text';
type FormFieldProps = {
  type: 'checkbox' | 'switch' | 'text' | 'textarea' | string;
  id: string;
  label: string;
  error?: string;
  value: boolean | string;
  onChange: (value: boolean | string) => void;
  [key: string]: any; // For additional props
};
const FormField = ({
  id,
  type,
  label,
  value,
  error,
  onChange,
  ...props
}: FormFieldProps) => {
  switch (type) {
    case 'checkbox':
      return (
        <View>
          <View className="flex-row items-center">
            <Checkbox
              className="mr-4"
              checked={value === 'true'}
              onChange={onChange}
            />
            <Text className="text-white font-bold text-lg">{label}</Text>
          </View>
          {error && <Text className="text-red-500">{error}</Text>}
        </View>
      );

    case 'switch':
      return (
        <View>
          <View className="flex flex-row justify-between">
            <Text className="text-white font-bold text-lg">{label}</Text>
            <Switch value={value === 'true'} onChange={onChange} {...props} />
          </View>
          {error && <Text className="text-red-500">{error}</Text>}
        </View>
      );

    case 'text':
      return (
        <View className="gap-2">
          <Text className="text-white font-bold text-lg">{label}</Text>
          <Input
            className={cn(error && 'border-red-500')}
            value={String(value)}
            onChangeText={onChange}
            {...props}
          />
          {error && <Text className="text-red-500">{error}</Text>}
        </View>
      );

    case 'textarea':
      return (
        <View className="gap-2">
          <Text className="text-white font-bold pb-2 text-lg">{label}</Text>
          <Input
            value={String(value)}
            className={cn(
              'min-h-24 align-top items-start',
              error && 'border-red-500',
            )}
            multiline
            numberOfLines={4}
            onChangeText={onChange}
            {...props}
          />
          {error && <Text className="text-red-500">{error}</Text>}
        </View>
      );

    default:
      return null;
  }
};
export default FormField;
