import React from 'react';
import styled from 'styled-components/native';

const StyledBase = styled.TouchableOpacity`
  ${({ isCategoryButton, theme }) =>
    isCategoryButton &&
    `
    background-color: ${theme.white};
    border-radius: 50px;
    padding-left: 15px;
    padding-right: 15px;
    margin-right: 5px;
    flex-direction: row;
    align-items: center;
    height: 48px;
  `}
  ${({ containerStyle }) => containerStyle}
`;

const Base = (props) => {
  return <StyledBase {...props} />;
};

export default Base;
