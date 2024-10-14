import React from 'react';
import { Modal as RNModal } from 'react-native'; // Renommer l'import pour éviter le conflit
import styled from 'styled-components/native';

const Overlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.View`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  width: 80%;
  align-items: center;
`;

const CustomModal = ({ modalVisible, setModalVisible, children, ...props }) => {
  return (
    <RNModal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
      {...props}
    >
      <Overlay>
        <ModalContainer>{children}</ModalContainer>
      </Overlay>
    </RNModal>
  );
};

export default CustomModal;
