import React from 'react';
import styled from 'styled-components/native';
import { Container, Image, Typo } from '../../atoms';
import colors from '../../../utils/Colors';

const StyledDeck = styled.TouchableOpacity`
  height: 1O0px;
  width: 100%;
  border-radius: 16px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
  margin: 10px 0;
`;

const Deck = ({
  deckIconName,
  numberOfCards,
  deckSourceImage,
  title,
  isEditable,
  image,
  onPressEditable,
  ...props
}) => {
  return (
    <StyledDeck {...props}>
      <Container.BaseRow>
        <Image.Icon
          name={deckIconName}
          size={28}
          color={colors.darkPurple}
          iconFamily={'FontAwesome'}
          isPaddingIcon={true}
        />
        <Container.Base>
          <Typo.SubTitle>{title}</Typo.SubTitle>
          <Typo.Paragraph>Nombre de carte : {numberOfCards}</Typo.Paragraph>
        </Container.Base>
      </Container.BaseRow>

      {isEditable && (
        <Image.Icon
          onPress={onPressEditable}
          name='edit'
          size={24}
          color={colors.lightPurple}
          iconFamily={'MaterialIcons'}
        />
      )}
    </StyledDeck>
  );
};

export default Deck;
