import React, { useEffect, useState } from 'react';
import { MyDeck } from '../../../components/templates';
import {
  useGetAllCardByDeckIdQuery,
  useCreateCardMutation,
  useUpdateCardMutation,
  useDeleteCardMutation,
} from '../../../services/card';

const Edition = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [cardId, setCardId] = useState(null);

  const {
    data: cardInfo,
    error,
    refetch: cardRefetch,
    isLoading: cardLoading,
  } = useGetAllCardByDeckIdQuery({ deckId: route.params.id });

  const [createCard, { isSuccess: createSuccess }] = useCreateCardMutation();
  const [updateCard, { isSuccess: updateSuccess }] = useUpdateCardMutation();
  const [deleteCard, { isSuccess: deleteSuccess }] = useDeleteCardMutation();

  useEffect(() => {
    if (createSuccess || updateSuccess || deleteSuccess) {
      setModalVisible(false);
      setQuestion('');
      setResponse('');
      setEditMode(false);
      setCardId(null);
      cardRefetch();
    }
  }, [createSuccess, updateSuccess, deleteSuccess, cardRefetch]);

  const onEditCard = (card) => {
    setQuestion(card.question);
    setResponse(card.answer);
    setCardId(card.id);
    setEditMode(true);
    setModalVisible(true);
  };

  const onSaveCard = () => {
    if (editMode && cardId) {
      updateCard({ id: cardId, question, response }).then(() => {
        setModalVisible(false);
        cardRefetch();
      });
    } else {
      createCard({
        question,
        response,
        deckId: route.params.id,
      }).then(() => {
        setModalVisible(false);
        cardRefetch();
      });
    }
  };

  const onDeleteCard = (cardId) => {
    if (cardId) {
      deleteCard({ cardId: cardId }).then(() => {
        cardRefetch();
      });
    }
  };

  return (
    <MyDeck.Edit
      cardLoading={cardLoading}
      refreshCardList={cardRefetch}
      onRefresh={cardRefetch}
      cards={cardInfo?.cards}
      onPressCard={(id) => {
        const card = cardInfo.cards.find((c) => c.id === id);
        onEditCard(card);
      }}
      createCard={onSaveCard}
      updateCard={updateCard}
      deleteCard={onDeleteCard}
      inputValueQuestion={question}
      setInputValueQuestion={setQuestion}
      inputValueResponse={response}
      setInputValueResponse={setResponse}
      modalVisible={modalVisible}
      onBackDropPress={() => setModalVisible(false)}
      onPressButton={() => {
        setEditMode(false);
        setModalVisible(!modalVisible);
      }}
      editMode={editMode}
    />
  );
};

export default Edition;
