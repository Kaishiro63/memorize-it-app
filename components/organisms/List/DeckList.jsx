import React from 'react';
import styled from 'styled-components/native';
import { Element } from '../../molecules';

const StyledDeckList = styled.FlatList`
  width: 100%;
  padding: 0 20px;
`;

const DeckList = ({ data, ...props }) => {
  return (
    <StyledDeckList
      {...props}
      data={data}
      renderItem={({ item }) => (
        <Element.Deck
          title={item.title}
          deckIconName={item.icon}
          numberOfCards={item.numberOfCards}
          isEditable={item.isEditable}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default DeckList;
