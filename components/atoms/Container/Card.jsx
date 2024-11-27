import React from 'react';
import styled from 'styled-components/native';
import colors from '../../../utils/Colors';

const StyledCard = styled.View`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.white};
  border-radius: 16px;
  display: flex;
  height: 80%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = (props) => {
  return <StyledCard {...props}></StyledCard>;
};

export default Card;
