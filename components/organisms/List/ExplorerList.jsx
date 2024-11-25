import React from 'react';
import styled from 'styled-components/native';
import { Element } from '../../molecules';

const StyledExplorerList = styled.FlatList``;

const ExplorerList = ({ onPressEditable, onPressDeck, data }) => {
  return (
    <StyledExplorerList
      data={data}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      renderItem={({ item }) => (
        <Element.Explorer
          onPress={() => onPressDeck(item.id)}
          title={item.name}
          categoryId={item.categoryId}
          deckFamilyIconName={item.iconCategoryFamily}
          numberOfCards={item.cardCount}
          isEditable={item.isEditable}
          onPressEditable={() => onPressEditable(item.id)}
        />
      )}
      keyExtractor={(item) => item.id}
      columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 10 }}
    />
  );
};

export default ExplorerList;
