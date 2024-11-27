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
  ...props
}) => {
  return (
    <Container.ScreenBase centeredTop>
      <List.EditCardList
        onPressCard={(id) => onPressCard(id)}
        onRefresh={() => refreshCardList()}
        isRefreshing={cardLoading}
        data={cards}
      ></List.EditCardList>

      <Element.Modal onBackDropPress={onBackDropPress} modalVisible={modalVisible}>
        <Typo.SubTitle fontSize={'20px'}>Ajoutez une carte</Typo.SubTitle>
        <Input.TextInput
          onChangeText={(e) => setInputValueQuestion(e)}
          value={inputValueQuestion}
          placeholder='Question'
        />
        <Input.TextInput
          onChangeText={(e) => setInputValueResponse(e)}
          value={inputValueResponse}
          placeholder='Réponse'
        />
        <ContainerButton.ClassicButton
          onPress={() => createCard()}
          backgroundColor={({ theme }) => theme.lightPurple}
        >
          <Typo.Paragraph
            color={({ theme }) => theme.white}
            fontSize={'18px'}
            fontFamily={'Poppins-Bold'}
          >
            Créer
          </Typo.Paragraph>
        </ContainerButton.ClassicButton>
      </Element.Modal>

      <Button.CircleIconButton onPress={() => onPressButton(true)} />
    </Container.ScreenBase>
  );
};

export default Edit;
