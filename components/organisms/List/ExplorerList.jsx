import React from 'react';
import styled from 'styled-components/native';
import { Element } from '../../molecules';
import { useNavigation } from '@react-navigation/native';

const StyledExplorerList = styled.FlatList``;

const ExplorerList = ({ data }) => {
  const navigation = useNavigation();
  return (
    <StyledExplorerList
      data={data}
      numColumns={2}
      renderItem={({ item }) => (
        <Element.Explorer
          onPress={() => navigation.navigate('Detail', { deck: item })}
          title={item.name}
          categoryId={item.categoryId}
          deckFamilyIconName={item.iconCategoryFamily}
          numberOfCards={item.cardCount}
        />
      )}
      keyExtractor={(item) => item.id}
      columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 10 }}
    />
  );
};

export default ExplorerList;
