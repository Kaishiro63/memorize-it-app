import React, { useEffect, useState } from 'react';
import { Container } from '../../../components/atoms';
import { List as ListComponents } from '../../../components/organisms';
import { useGetAllCategoriesQuery } from '../../../services/deck';
import { useLazyGetExplorerDecksByCategoryQuery } from '../../../services/explorer';
import { ExplorerList } from '../../../components/organisms/List';
import { useIsFocused } from '@react-navigation/native';

const List = () => {
  const [selectedCategory, setSelectedCategory] = useState(undefined);
  const { data } = useGetAllCategoriesQuery();
  const [trigger, { data: explorerDecks }] = useLazyGetExplorerDecksByCategoryQuery();
  const isFocused = useIsFocused();

  useEffect(() => {
    trigger(selectedCategory && { categoryId: selectedCategory });
  }, [selectedCategory]);

  useEffect(() => {
    if (isFocused) {
      trigger(selectedCategory && { categoryId: selectedCategory });
    }
  }, [isFocused]);

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
