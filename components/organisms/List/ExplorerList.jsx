import React from 'react';
import styled from 'styled-components/native';
import { Element } from '../../molecules';
import { useNavigation } from '@react-navigation/native';

const StyledExplorerList = styled.FlatList``;

const ExplorerList = ({ data }) => {
  const navigation = useNavigation();
  console.log(JSON.stringify(data, null, 2));
  return (
    <StyledExplorerList
      data={data}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      renderItem={({ item }) => (
        <Element.Explorer
          onPress={() => navigation.navigate('Detail', { deck: item })}
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
