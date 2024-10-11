import React from 'react';
import { Container } from '../../atoms';
import { Button } from '../../molecules';
import { List } from '../../organisms';

const Library = ({ onPressButton, decks, ...props }) => {
  return (
    <Container.ScreenBase isNotPadding centered {...props}>
      <List.DeckList data={decks} />
      <Button.CircleIconButton onPress={onPressButton} />
    </Container.ScreenBase>
  );
};

export default Library;
