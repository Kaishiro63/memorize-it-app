import React from 'react';
import { Container, Input, Typo, ContainerButton } from '../../atoms';
import { Button, Element } from '../../molecules';
import { List } from '../../organisms';

const Edit = ({
  refreshCardList,
  cardLoading,
  onPressCard,
  onRefresh,
  isRefreshing,
  cards,
  inputValueQuestion,
  inputValueResponse,
  createCard,
  setInputValueQuestion,
  setInputValueResponse,
  onPressButton,
  modalVisible,
  onBackDropPress,
  editMode,
  updateCard,
  deleteCard,
  cardId,
  deckId,
  ...props
}) => {
  const handleDeleteCard = (cardId) => {
    deleteCard(cardId);
  };
  const handleSave = () => {
    if (editMode && cardId) {
      updateCard({ id: cardId, question: inputValueQuestion, response: inputValueResponse });
      refreshCardList();
    } else {
      createCard({
        question: inputValueQuestion,
        response: inputValueResponse,
        deckId: deckId,
      });
      refreshCardList();
    }
  };

  return (
    <Container.ScreenBase centeredTop>
      <List.EditCardList
        onPressCard={onPressCard}
        onRefresh={refreshCardList}
        isRefreshing={cardLoading}
        data={cards}
        onDeleteCard={handleDeleteCard}
      />

      <Element.Modal onBackDropPress={onBackDropPress} modalVisible={modalVisible}>
        <Typo.SubTitle fontSize={'20px'}>
          {editMode ? 'Modifier la carte' : 'Ajoutez une carte'}
        </Typo.SubTitle>

        <Input.TextInput
          onChangeText={setInputValueQuestion}
          value={inputValueQuestion}
          placeholder='Question'
        />
        <Input.TextInput
          onChangeText={setInputValueResponse}
          value={inputValueResponse}
          placeholder='Réponse'
        />
        <ContainerButton.ClassicButton
          onPress={handleSave}
          backgroundColor={({ theme }) => theme.lightPurple}
        >
          <Typo.Paragraph
            color={({ theme }) => theme.white}
            fontSize={'18px'}
            fontFamily={'Poppins-Bold'}
          >
            {editMode ? 'Sauvegarder' : 'Créer'}
          </Typo.Paragraph>
        </ContainerButton.ClassicButton>
      </Element.Modal>

      <Button.CircleIconButton onPress={onPressButton} />
    </Container.ScreenBase>
  );
};

export default Edit;
