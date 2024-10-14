import React from 'react';
import { Container } from '../../atoms';
import { Button, Element, ModalComponent } from '../../molecules';
import { List } from '../../organisms';

const Library = ({
  onPressEditable,
  onPressDeck,
  onRefresh,
  isRefreshing,
  onPressButton,
  decks,
  modalVisible,
  setModalVisible,
  ...props
}) => {
  return (
    <Container.ScreenBase isNotPadding centered {...props}>
      <List.DeckList
        onPressEditable={(id) => onPressEditable(id)}
        onPressDeck={(id) => onPressDeck(id)}
        onRefresh={onRefresh}
        isRefreshing={isRefreshing}
        data={decks}
      />
      <Button.CircleIconButton onPress={() => onPressButton()} />
      <Element.Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={'Créez votre deck'}
      ></Element.Modal>
    </Container.ScreenBase>
  );
};

export default Library;
