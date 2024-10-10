import React from 'react';
import styled from 'styled-components/native';
import colors from '../../../utils/Colors';

const StyledParagraph = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 18px;
  color: ${({ color }) => color || colors.darkPurple};
`;

const Paragraph = ({ color, ...props }) => {
  return <StyledParagraph color={color} {...props}></StyledParagraph>;
};

export default Paragraph;
