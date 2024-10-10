import React from 'react';
import styled from 'styled-components/native';
import colors from '../../../utils/Colors';

const StyledCard = styled.TouchableOpacity`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${colors.white};
  border-radius: 16px;
  height: 60%;
  width: 100%;
`;

const Card = (props) => {
  return <StyledCard {...props}></StyledCard>;
};

export default Card;
