import React from 'react';
import { Container } from '../../atoms';
import { Button } from '../../molecules';
import { List } from '../../organisms';

const Library = ({
  onPressEditable,
  onPressDeck,
  onRefresh,
  isRefreshing,
  onPressButton,
  decks,
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
      <Button.CircleIconButton onPress={onPressButton} />
    </Container.ScreenBase>
  );
};

export default Library;
