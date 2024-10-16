import React from 'react';
import { Container } from '../../atoms';
import { Button } from '../../molecules';
import { List } from '../../organisms';

const Edit = ({
  refreshCardList,
  cardLoading,
  onPressCard,
  onRefresh,
  isRefreshing,
  cards,
  ...props
}) => {
  return (
    <Container.BaseFlex>
      <Container.BaseRow isNotPadding centered {...props}>
        <List.EditCardList
          onPressCard={(id) => onPressCard(id)}
          onRefresh={() => refreshCardList()}
          isRefreshing={cardLoading}
          data={cards}
        ></List.EditCardList>
      </Container.BaseRow>
      <Button.CircleIconButton />
    </Container.BaseFlex>
  );
};

export default Edit;
