import React from 'react';
import styled from 'styled-components/native';
import { Container, Typo } from '../../atoms';

const StyledMemoryCard = styled.TouchableOpacity`
  width: 80%;
`;

const MemoryCard = ({ ...props }) => {
  return (
    <StyledMemoryCard {...props}>
      <Container.Card>
        <Typo.SubTitle>Memory Card</Typo.SubTitle>
      </Container.Card>
    </StyledMemoryCard>
  );
};

export default MemoryCard;
