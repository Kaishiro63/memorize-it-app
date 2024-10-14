import React from 'react';
import { Container } from '../../atoms';
import colors from '../../../utils/Colors';

const Modal = ({ modalVisible, onBackDropPress, ...props }) => {
  return (
    <Container.ContainerModal onBackDropPress={onBackDropPress} modalVisible={modalVisible}>
      <Container.Base
        {...props}
        containerStyle={`
          background-color: ${colors.white};
          border-radius: 16px;
          width: 100%;
          display: flex;
          padding: 20px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
      `}
      ></Container.Base>
    </Container.ContainerModal>
  );
};

export default Modal;
