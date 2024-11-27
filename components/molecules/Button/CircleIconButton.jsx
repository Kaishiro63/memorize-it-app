import React from 'react';
import { ContainerButton, Image } from '../../atoms';

const CircleIconButton = ({ ...props }) => {
  return (
    <ContainerButton.ClassicButton
      {...props}
      isRounded
      backgroundColor={({ theme }) => theme.lightPurple}
    >
      <Image.Icon
        name='add'
        size={36}
        color={({ theme }) => theme.darkWhite}
        iconFamily='MaterialIcons'
      />
    </ContainerButton.ClassicButton>
  );
};

export default CircleIconButton;
