import React from 'react';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  border-width: 0.5px;
  border-radius: 12px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  padding: 8px;
  height: 45px;
  width: 100%;
  ${({ containerStyle }) => containerStyle}
`;

const TextInput = ({ containerStyle, ...props }) => {
  return <StyledInput containerStyle={containerStyle} {...props}></StyledInput>;
};

export default TextInput;
