import React from 'react';
import styled from 'styled-components/native';

const StyledBaseFlex = styled.View`
  flex: 1;

  width: 100%;
`;
const BaseFlex = (props) => {
  return <StyledBaseFlex {...props}></StyledBaseFlex>;
};

export default BaseFlex;
