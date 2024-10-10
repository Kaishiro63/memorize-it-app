import React from 'react';
import styled from 'styled-components/native';

const StyledParagraph = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 18;
`;

const Paragraph = (props) => {
  return <StyledParagraph {...props}></StyledParagraph>;
};

export default Paragraph;
