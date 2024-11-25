import React from 'react';
import styled from 'styled-components/native';
import colors from '../../../utils/Colors';

const StyledSubTitle = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: ${({ fontSize }) => fontSize || '16px'};
  color: ${({ color }) => color || colors.darkPurple};
  text-align: ${({ textAlign }) => textAlign || 'left'};
`;

const SubTitle = ({ textAlign, color, ...props }) => {
  return <StyledSubTitle textAlign={textAlign} color={color} {...props}></StyledSubTitle>;
};

export default SubTitle;
