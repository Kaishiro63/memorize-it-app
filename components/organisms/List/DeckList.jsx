import React from 'react';
import styled from 'styled-components/native';
import { Element } from '../../molecules';
import { Native } from '../../atoms';

const StyledDeckList = styled.FlatList`
  width: 100%;
  padding: 0 20px;
`;

const DeckList = ({ onPressEditable, onPressDeck, onRefresh, isRefreshing, data }) => {
  return (
    <StyledDeckList
      refreshControl={
        <Native.RefreshControl onRefresh={() => onRefresh()} refreshing={isRefreshing} size={24} />
      }
      data={data}
      renderItem={({ item }) => (
        <Element.Deck
          onPress={() => onPressDeck(item.id)}
          title={item.title}
          deckIconName={item.icon}
          numberOfCards={item.numberOfCards}
          isEditable={item.isEditable}
          onPressEditable={() => onPressEditable(item.id)}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default DeckList;
