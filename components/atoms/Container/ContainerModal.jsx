import React from 'react';
import Modal from 'react-native-modal';

const ContainerModal = ({ modalVisible, onBackDropPress, ...props }) => {
  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={onBackDropPress}
      backdropOpacity={0.3}
      useNativeDriver
      {...props}
    ></Modal>
  );
};

export default ContainerModal;
