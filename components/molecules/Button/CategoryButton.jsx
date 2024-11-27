import React from 'react';
import { ContainerButton, Typo } from '../../atoms';
import { Icon } from '../../atoms/Image';

const CategoryButton = ({ name, id, icon, iconFamily, onPress, isActive }) => {
  return (
    <ContainerButton.Base
      onPress={onPress}
      isCategoryButton
      containerStyle={({ theme }) =>
        isActive ? { backgroundColor: theme.beige } : { backgroundColor: theme.white }
      }
    >
      <Icon containerStyle={{ marginRight: 10 }} iconFamily={iconFamily} name={icon} size={20} />
      <Typo.Paragraph>{name}</Typo.Paragraph>
    </ContainerButton.Base>
  );
};

export default CategoryButton;
