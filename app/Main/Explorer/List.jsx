import React, { useState } from 'react';
import { Container } from '../../../components/atoms';
import { List as ListComponents } from '../../../components/organisms';
import { useGetAllCategoriesQuery } from '../../../services/deck';
import { useGetExplorerDecksQuery } from '../../../services/explorer';
import { ExplorerList } from '../../../components/organisms/List';

const List = ({ route }) => {
  const [selectedCategory, setSelectedCategory] = useState(undefined);
  const { data } = useGetAllCategoriesQuery();
  const { data: explorerDecks, error, isLoading } = useGetExplorerDecksQuery();

  const handleSelectCategory = (id) => {
    if (selectedCategory === id) {
      setSelectedCategory(undefined);
      return;
    } else {
      setSelectedCategory(id);
    }
  };

  return (
    <Container.ScreenBase>
      <ListComponents.CategoryList
        activeCategoryId={selectedCategory}
        onPressCategory={(id) => handleSelectCategory(id)}
        data={data}
      />
      <ExplorerList data={explorerDecks} />
    </Container.ScreenBase>
  );
};

export default List;
