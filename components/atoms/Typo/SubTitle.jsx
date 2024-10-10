import React from 'react';
import styled from 'styled-components/native';
import colors from '../../../utils/Colors';

const StyledSubTitle = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 24;
  color: ${({color}) => color || colors.darkPurple};
`;

const SubTitle = ({color, ...props}) => {
  return <StyledSubTitle color={color} {...props}></StyledSubTitle>;
};

export default SubTitle;
