import React from 'react';
import styled from 'styled-components';
import { Button } from '../../molecules';

const StyledCategoryList = styled.FlatList`
  padding: 8px 0 24px 0;
`;
const CategoryList = ({ data, onPressCategory, activeCategoryId }) => {
  return (
    <StyledCategoryList
      data={data}
      showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={({ item }) => {
        return (
          <Button.CategoryButton
            isActive={activeCategoryId === item.id}
            onPress={() => onPressCategory(item.id)}
            name={item.name}
            id={item.id}
            icon={item.iconName}
            iconFamily={item.iconLibrary}
          />
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CategoryList;
