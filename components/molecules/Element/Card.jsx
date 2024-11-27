import React from 'react';
import styled from 'styled-components/native';
import { Typo } from '../../atoms';
import colors from '../../../utils/Colors';

const StyledCard = styled.TouchableOpacity`
  height: 150px;
  width: 45%;
  border-radius: 16px;
  padding: 8px;
  margin: 9px;
  background-color: ${({ theme }) => theme.white};
`;

const Card = ({ title, onPressEditable, ...props }) => {
  return (
    <StyledCard {...props}>
      <Typo.SubTitle textAlign={'center'} fontSize={'14px'}>
        {title}
      </Typo.SubTitle>
    </StyledCard>
  );
};

export default Card;
