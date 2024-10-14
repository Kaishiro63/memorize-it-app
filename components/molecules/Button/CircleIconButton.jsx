import React from 'react';
import colors from '../../../utils/Colors';
import { Button, Image } from '../../atoms';

const CircleIconButton = ({ ...props }) => {
  return (
    <Button.ClassicButton {...props} isRounded backgroundColor={colors.lightPurple}>
      <Image.Icon
        name={'add'}
        size={36}
        color={colors.darkWhite}
        iconFamily={'MaterialIcons'}
      ></Image.Icon>
    </Button.ClassicButton>
  );
};

export default CircleIconButton;
