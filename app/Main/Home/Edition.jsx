import React, { useEffect, useState } from 'react';
import { MyDeck } from '../../../components/templates';
import { useGetAllCardByDeckIdQuery, useCreateCardMutation } from '../../../services/card';

const Edition = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const {
    data: cardInfo,
    error,
    refetch: cardRefetch,
    isLoading: cardLoading,
  } = useGetAllCardByDeckIdQuery({ deckId: route.params.id });

  const [createCard, { isSuccess }] = useCreateCardMutation();

  useEffect(() => {
    if (isSuccess) {
      setModalVisible(false);
      setQuestion('');
      setResponse('');
      cardRefetch();
    }
  }, [isSuccess, cardRefetch]);

  const onPressCard = () => {
    navigation.navigate();
  };

  return (
    <MyDeck.Edit
      cardLoading={cardLoading}
      refreshCardList={cardRefetch}
      onRefresh={cardRefetch}
      cards={cardInfo?.cards}
      onPressCard={onPressCard}
      createCard={() => {
        createCard({ question, response, deckId: route.params.id });
      }}
      inputValueQuestion={question}
      setInputValueQuestion={(value) => setQuestion(value)}
      inputValueResponse={response}
      setInputValueResponse={(value) => setResponse(value)}
      modalVisible={modalVisible}
      onBackDropPress={() => setModalVisible(false)}
      onPressButton={() => setModalVisible(!modalVisible)}
    />
  );
};

export default Edition;
