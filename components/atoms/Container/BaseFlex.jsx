import React from 'react';
import styled from 'styled-components/native';
import { useHeaderHeight } from '@react-navigation/elements';
import colors from '../../../utils/Colors';

const StyledBaseFlex = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.darkWhite};
  padding-top: ${({ safePaddingTop }) => safePaddingTop}px;
`;
const BaseFlex = ({ ...props }) => {
  const top = useHeaderHeight();
  return <StyledBaseFlex safePaddingTop={top} {...props}></StyledBaseFlex>;
};

export default BaseFlex;
