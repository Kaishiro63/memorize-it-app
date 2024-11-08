import React, { useState } from 'react';
import { Container } from '../../../components/atoms';
import { List as ListComponents } from '../../../components/organisms';

const List = () => {
  const [selectedCategory, setSelectedCategory] = useState(undefined);
  const data = [
    {
      id: 1,
      name: 'Deck',
      iconName: 'forward',
      iconFamily: 'AntDesign',
    },
    {
      id: 2,
      name: 'Card',
      iconName: 'forward',
      iconFamily: 'AntDesign',
    },
  ];

  const handleSelectCategory = (id) => {
    if (selectedCategory === id) {
      setSelectedCategory(undefined);
      return;
    } else {
      setSelectedCategory(id);
    }
  };

  return (
    <Container.BaseFlex isNotPadding>
      <ListComponents.CategoryList
        activeCategoryId={selectedCategory}
        onPressCategory={(id) => handleSelectCategory(id)}
        data={data}
      />
    </Container.BaseFlex>
  );
};

export default List;
