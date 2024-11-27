import React from 'react';
import styled from 'styled-components/native';
import colors from '../../../utils/Colors';

const StyledInput = styled.TextInput`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  color: ${({ theme }) => theme.black};
  border-width: 0.5px;
  border-radius: 8px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  padding: 8px;
  height: 45px;
  width: 100%;
`;

const TextInput = (props) => {
  return <StyledInput {...props}></StyledInput>;
};

export default TextInput;
