import React from 'react';
import styled from 'styled-components/native';
import { Native } from '../../atoms';
import { Element } from '../../molecules';

const StyledEditCardList = styled.FlatList`
  width: 100%;
`;

const EditCardList = ({ onPressCard, onRefresh, isRefreshing, data, onDeleteCard }) => {
  return (
    <StyledEditCardList
      refreshControl={
        <Native.RefreshControl onRefresh={onRefresh} refreshing={isRefreshing} size={24} />
      }
      data={data}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Element.Card
          onPress={() => onPressCard(item.id)}
          title={item.question}
          numberOfCards={item.cardCount}
          onDeleteCard={() => {
            onDeleteCard(item.id);
          }}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default EditCardList;
