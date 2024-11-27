import React from 'react';
import styled from 'styled-components/native';

const StyledSubTitle = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: ${({ fontSize }) => fontSize || '16px'};
  color: ${({ color, theme }) => color || theme.darkPurple};
  text-align: ${({ textAlign }) => textAlign || 'left'};
`;

const SubTitle = ({ color, ...props }) => {
  return <StyledSubTitle color={color} {...props} />;
};

export default SubTitle;
