import React from 'react';
import styled from 'styled-components/native';

const StyledBase = styled.View`
  ${({ containerStyle }) => containerStyle && containerStyle};
`;
const Base = ({ containerStyle, ...props }) => {
  return <StyledBase containerStyle={containerStyle} {...props}></StyledBase>;
};

export default Base;
