import React from 'react';
import { Button, Typo, Input } from '../../atoms';
import styled from 'styled-components/native';
import colors from '../../../utils/Colors';
import { Image } from '../../atoms';
import { View } from 'react-native-web';

const ModalContent = styled.View`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  align-items: center;
`;

const Modal = ({ setModalVisible, title }) => {
  return (
    <View></View>
    // <ModalContent>
    //   <Button onPress={() => setModalVisible(false)}>
    //     <Image.Icon
    //       name={'close'}
    //       size={28}
    //       color={colors.darkPurple}
    //       iconFamily={'FontAwesome'}
    //       isPaddingIcon={true}
    //     />
    //   </Button>
    //   <Typo.SubTitle>{title}</Typo.SubTitle>
    //   <Input.TextInput placeholder='Saisissez ici...' />
    // </ModalContent>
  );
};

export default Modal;
