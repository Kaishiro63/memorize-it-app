import React from 'react';
import styled from 'styled-components/native';

const StyledBaseRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const BaseRow = (props) => {
  return <StyledBaseRow {...props}></StyledBaseRow>;
};

export default BaseRow;
