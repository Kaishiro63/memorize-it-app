import React from 'react';
import styled from 'styled-components/native';
import { Button, Image, Typo } from '../../atoms';
import colors from '../../../utils/Colors';

const StyledDeck = styled.TouchableOpacity`
  height: 120px;
  width: 100%;
  border-radius: 16px;
  padding: 8px;
  display: flex;
  align-items: center;
  background-color: ${colors.lightPurple};
`;

const Deck = ({ deckSourceImage, title, isEditable, image, onPressEditable, ...props }) => {
  return (
    <StyledDeck {...props}>
      <Image.DeckImage source={deckSourceImage} />
      <Typo.SubTitle>{title}</Typo.SubTitle>
      {isEditable && (
        <Image.Icon name='edit' size={24} color={colors.white} iconFamily={'MaterialIcons'} />
      )}
    </StyledDeck>
  );
};

export default Deck;
