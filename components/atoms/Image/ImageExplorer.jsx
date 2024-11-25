import React from 'react';
import styled from 'styled-components/native';

const StyledImageExplorer = styled.Image`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  border-radius: 16px;
  overflow: hidden;
`;

const ImageExplorer = ({ source, resizeMode = 'cover', ...props }) => {
  return <StyledImageExplorer source={source} resizeMode={resizeMode} {...props} />;
};

export default ImageExplorer;
