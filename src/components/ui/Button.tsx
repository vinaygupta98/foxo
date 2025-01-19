import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';
export interface IButton {
  children: React.ReactNode;
  disabled?: boolean;
  spinner?: boolean;
  onPress: (e: GestureResponderEvent) => void;
  className?: string;
  variants?: 'primary' | 'secondary';
}

const Button = ({onPress, disabled, children, className, spinner}: IButton) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      className={className}
      disabled={disabled || spinner}>
      {spinner ? <ActivityIndicator size={'large'} className="" /> : children}
    </TouchableOpacity>
  );
};

export default Button;
