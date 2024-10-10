import React from 'react';
import styled from 'styled-components/native';

const StyledBase = styled.Image`
  width: 16px;
  height: 16px;
`;

const Base = (props) => {
  return <StyledBase {...props} />;
};

export default Base;
