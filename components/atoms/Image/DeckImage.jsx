import React from 'react';
import styled from 'styled-components/native';
import colors from '../../../utils/Colors';

const StyledDeckImage = styled.Image`
  width: 24px;
  height: 24px;
  padding: 8px;
  ${({ backgroundColorImage }) => (backgroundColorImage ? backgroundColorImage : colors.beige)}
`;

const DeckImage = ({ backgroundColorImage, ...props }) => {
  return <StyledDeckImage backgroundColorImage={backgroundColorImage} {...props}></StyledDeckImage>;
};

export default DeckImage;
