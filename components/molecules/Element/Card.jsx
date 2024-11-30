import React from 'react';
import styled from 'styled-components/native';
import { Typo } from '../../atoms';

const StyledCard = styled.TouchableOpacity`
  height: 150px;
  width: 45%;
  border-radius: 16px;
  padding: 8px;
  margin: 9px;
  background-color: ${({ theme }) => theme.white};
  justify-content: space-between;
`;

const Card = ({ title, onPressEditable, onDeleteCard, ...props }) => {
  return (
    <StyledCard {...props}>
      <Typo.SubTitle textAlign={'center'} fontSize={'14px'}>
        {title}
      </Typo.SubTitle>
      <Typo.Paragraph textAlign={'center'} color={({ theme }) => theme.red} onPress={onDeleteCard}>
        Supprimer
      </Typo.Paragraph>
    </StyledCard>
  );
};

export default Card;
