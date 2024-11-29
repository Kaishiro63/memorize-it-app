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
      showsVerticalScrollIndicator={false}
      numColumns={2}
      renderItem={({ item }) => (
        <Element.Explorer
          onPress={() => navigation.navigate('Detail', { deckId: item.id })}
          title={item.name}
          categoryId={item.categoryId}
          price={item.price}
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
