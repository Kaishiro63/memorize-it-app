import React from 'react';
import styled from 'styled-components/native';

const StyledBaseRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ padding }) => padding || '0'};
`;
const BaseRow = (props) => {
  return <StyledBaseRow {...props}></StyledBaseRow>;
};

export default BaseRow;
