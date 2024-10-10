import React from 'react';
import styled from 'styled-components/native';

const StyledTitle = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 32;
`;

const Title = (props) => {
  return <StyledTitle {...props}></StyledTitle>;
};

export default Title;
