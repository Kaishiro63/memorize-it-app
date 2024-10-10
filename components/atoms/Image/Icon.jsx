import React from 'react';
import styled from 'styled-components/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const StyledIcon = styled.View``;

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

const Icon = ({ name, size, color, iconFamily, onPress }) => {
  const Icon = getIconFamily(iconFamily);
  return (
    <StyledIcon>
      <Icon name={name} size={size} color={color} onPress={onPress} />
    </StyledIcon>
  );
};

export default Icon;
