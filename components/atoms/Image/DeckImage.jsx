import React from 'react';
import styled from 'styled-components/native';

const StyledDeckImage = styled.Image`
  width: 24px;
  height: 24px;
  padding: 8px;
  background-color: ${({ theme, backgroundColorImage }) =>
    backgroundColorImage ? backgroundColorImage : theme.beige};
`;

const DeckImage = ({ backgroundColorImage, ...props }) => {
  return <StyledDeckImage backgroundColorImage={backgroundColorImage} {...props}></StyledDeckImage>;
};

export default DeckImage;
