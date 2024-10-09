import React from 'react';
import styled from 'styled-components/native';

const StyledClassicButton = styled.TouchableOpacity`
  background-color: ${(props) => (props.isRounded ? 'red' : 'green')};
`;

const ClassicButton = (props) => {
  return <StyledClassicButton {...props}></StyledClassicButton>;
};

export default ClassicButton;
