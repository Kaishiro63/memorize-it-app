import React from 'react';
import styled from 'styled-components/native';
import colors from '../../../utils/Colors';

const StyledTitle = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 32px;
  color: ${({ color }) => color || colors.darkPurple};
`;

const Title = ({ color, ...props }) => {
  return <StyledTitle color={color} {...props}></StyledTitle>;
};

export default Title;
