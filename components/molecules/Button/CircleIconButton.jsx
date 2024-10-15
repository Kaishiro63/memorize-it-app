import React from 'react';
import colors from '../../../utils/Colors';
import { ContainerButton, Image } from '../../atoms';

const CircleIconButton = ({ ...props }) => {
  return (
    <ContainerButton.ClassicButton {...props} isRounded backgroundColor={colors.lightPurple}>
      <Image.Icon
        name={'add'}
        size={36}
        color={colors.darkWhite}
        iconFamily={'MaterialIcons'}
      ></Image.Icon>
    </ContainerButton.ClassicButton>
  );
};

export default CircleIconButton;
