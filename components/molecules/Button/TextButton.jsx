import React from 'react';
import { ContainerButton, Typo } from '../../atoms';

const TextButton = ({ name, onPress }) => {
  return (
    <ContainerButton.Base onPress={onPress}>
      <Typo.SubTitle>{name}</Typo.SubTitle>
    </ContainerButton.Base>
  );
};

export default TextButton;
