import React from 'react';
import { Container } from '../../../components/atoms';
import { MyDeck } from '../../../components/templates';
import { useGetAllCardByDeckIdQuery } from '../../../services/card';

const Edition = ({ navigation, route }) => {
  const {
    data: cardInfo,
    error,
    refetch: cardRefetch,
    isLoading: cardLoading,
  } = useGetAllCardByDeckIdQuery({ deckId: route.params.id });

  console.log(cardInfo?.cards);

  const onPressCard = () => {
    navigation.navigate();
  };
  return (
    <Container.ScreenBase centeredTop>
      <MyDeck.Edit
        cardLoading={cardLoading}
        refreshCardList={cardRefetch}
        cards={cardInfo?.cards}
        onPressCard={onPressCard}
      ></MyDeck.Edit>
    </Container.ScreenBase>
  );
};

export default Edition;
