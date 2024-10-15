import React from 'react';
import styled from 'styled-components/native';

const StyledBase = styled.TouchableOpacity``;

const Base = (props) => {
  return <StyledBase {...props}></StyledBase>;
};

export default Base;
