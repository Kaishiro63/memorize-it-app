import React from 'react';
import styled from 'styled-components/native';
import colors from '../../../utils/Colors';

const StyledParagraph = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: ${({ fontSize }) => fontSize || '12px'};
  color: ${({ color, theme }) => color || theme.darkPurple};

  font-family: ${({ fontFamily }) => fontFamily || 'Poppins-Regular'};
`;

const Paragraph = ({ color, ...props }) => {
  return <StyledParagraph color={color} {...props}></StyledParagraph>;
};

export default Paragraph;
