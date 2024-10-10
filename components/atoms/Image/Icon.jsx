import React from 'react';
import styled from 'styled-components/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../utils/Colors';

const StyledIcon = styled.View`
  ${({ containerStyle }) => containerStyle && containerStyle}
  ${({ isPaddingIcon }) =>
    isPaddingIcon &&
    `background-color: ${colors.beige}; width: 60px; aspect-ratio: 1; border-radius: 16px; margin-right: 20px; display: flex; align-items: center; justify-content: center;`}
`;

const getIconFamily = (iconFamily) => {
  switch (iconFamily) {
    case 'AntDesign':
      return AntDesign;
    case 'FontAwesome':
      return FontAwesome;
    case 'MaterialIcons':
      return MaterialIcons;
    default:
      return AntDesign;
  }
};

const Icon = ({ name, size, color, iconFamily, onPress, containerStyle, isPaddingIcon }) => {
  const Icon = getIconFamily(iconFamily);
  return (
    <StyledIcon isPaddingIcon={isPaddingIcon} containerStyle={containerStyle}>
      <Icon name={name} size={size} color={color} onPress={onPress} />
    </StyledIcon>
  );
};

export default Icon;
