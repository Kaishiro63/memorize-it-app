import React from 'react';
import styled from 'styled-components/native';
import colors from '../../../utils/Colors';

const StyledInput = styled.TextInput`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  color: ${colors.black};
  border-radius: 16px;
  border: 1px solid ${colors.black};
  padding: 8px;
  height: 36px;
  width: 100%;
`;

const TextInput = (props) => {
  return <StyledInput {...props}></StyledInput>;
};

export default TextInput;
