import React from 'react';
import styled from 'styled-components/native';

const StyledBase = styled.Image`
  width: 96px;
  height: 96px;
`;

const Base = (props) => {
  return <StyledBase {...props} />;
};

export default Base;
