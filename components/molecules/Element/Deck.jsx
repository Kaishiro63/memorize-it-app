import React from 'react';
import styled from 'styled-components/native';
import { Container, Image, Typo } from '../../atoms';
import colors from '../../../utils/Colors';

const StyledDeck = styled.TouchableOpacity`
  width: 100%;
  border-radius: 16px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.white};
  margin: 10px 0;
`;

const Deck = ({
  deckIconName,
  numberOfCards,
  title,
  isEditable,
  image,
  onPressEditable,
  deckFamilyIconName,
  ...props
}) => {
  return (
    <StyledDeck {...props}>
      <Container.BaseRow>
        <Image.Icon
          name={deckIconName}
          size={28}
          color={({ theme }) => theme.darkPurple}
          iconFamily={deckFamilyIconName}
          isPaddingIcon={true}
        />
        <Container.Base>
          <Container.Base containerStyle={`max-width: 80%`}>
            <Typo.SubTitle numberOfLines={1}>{title}</Typo.SubTitle>
          </Container.Base>
          <Typo.Paragraph>Nombre de carte : {numberOfCards}</Typo.Paragraph>
        </Container.Base>
      </Container.BaseRow>

      {isEditable && (
        <Image.Icon
          onPress={onPressEditable}
          name='edit'
          size={24}
          color={({ theme }) => theme.lightPurple}
          iconFamily={'MaterialIcons'}
        />
      )}
    </StyledDeck>
  );
};

export default Deck;
