import React from 'react';
import styled from 'styled-components/native';

const StyledSubTitle = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 24;
`;

const SubTitle = (props) => {
  return <StyledSubTitle {...props}></StyledSubTitle>;
};

export default SubTitle;
