import React from 'react';
import { Container, Input, Typo } from '../../atoms';
import { Button, Element } from '../../molecules';
import { List } from '../../organisms';

const Library = ({
  onPressEditable,
  onPressDeck,
  onRefresh,
  isRefreshing,
  onPressButton,
  decks,
  modalVisible,
  onBackDropPress,
  ...props
}) => {
  return (
    <Container.ScreenBase isNotPadding centered {...props}>
      <Element.Modal onBackDropPress={onBackDropPress} modalVisible={modalVisible}>
        <Typo.SubTitle>Modal</Typo.SubTitle>
        <Input.TextInput placeholder='Input' />
      </Element.Modal>
      <List.DeckList
        onPressEditable={(id) => onPressEditable(id)}
        onPressDeck={(id) => onPressDeck(id)}
        onRefresh={onRefresh}
        isRefreshing={isRefreshing}
        data={decks}
      />
      <Button.CircleIconButton onPress={() => onPressButton(true)} />
    </Container.ScreenBase>
  );
};

export default Library;
