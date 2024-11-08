import React from 'react';
import styled from 'styled-components';
import { Button } from '../../molecules';

const StyledCategoryList = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    paddingLeft: 16,
  },
}))``;
const CategoryList = ({ data, onPressCategory, activeCategoryId }) => {
  return (
    <StyledCategoryList
      data={data}
      horizontal
      renderItem={({ item }) => {
        return (
          <Button.CategoryButton
            isActive={activeCategoryId === item.id}
            onPress={() => onPressCategory(item.id)}
            name={item.name}
            id={item.id}
            icon={item.iconName}
            iconFamily={item.iconFamily}
          />
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CategoryList;
