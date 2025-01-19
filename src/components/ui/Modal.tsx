import React from 'react';
import { Modal as RNModal, View } from 'react-native';

interface IModal {
  modalVisible: boolean;
  disableIcon?: boolean;
  onBackdropPress?: () => void;
  children: React.ReactNode;
}
const Modal = ({
  modalVisible = false,
  onBackdropPress = () => {},
  children,
}: IModal) => {
  return (
    <View className="flex-1">
      <RNModal
        visible={modalVisible}
        transparent
        statusBarTranslucent
        animationType="slide"
        onRequestClose={onBackdropPress}>
        <View className="flex-1 items-center justify-center bg-black/50 p-5">
         {children}
        </View>
      </RNModal>
    </View>
  );
};

export default Modal;
