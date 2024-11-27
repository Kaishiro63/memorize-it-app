import React from 'react';
import { Container } from '../../atoms';

const Modal = ({ modalVisible, onBackDropPress, ...props }) => {
  return (
    <Container.ContainerModal onBackDropPress={onBackDropPress} modalVisible={modalVisible}>
      <Container.Base
        {...props}
        containerStyle={({ theme }) => ({
          backgroundColor: theme.white,
          borderRadius: 16,
          width: '100%',
          padding: 20,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        })}
      ></Container.Base>
    </Container.ContainerModal>
  );
};

export default Modal;
