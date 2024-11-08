import React from 'react';
import { ContainerButton, Typo } from '../../atoms';
import { Icon } from '../../atoms/Image';
import colors from '../../../utils/Colors';

const CategoryButton = ({ name, id, icon, iconfamily, onPress, isActive }) => {
  return (
    <ContainerButton.Base
      onPress={onPress}
      isCategoryButton
      containerStyle={isActive && `background-color : ${colors.beige};`}
    >
      <Icon containerStyle={`margin-right : 10px`} iconFamily={iconfamily} name={icon} size={20} />
      <Typo.Paragraph>{name}</Typo.Paragraph>
    </ContainerButton.Base>
  );
};

export default CategoryButton;
