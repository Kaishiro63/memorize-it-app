import React, { useState } from 'react';
import { Alert } from 'react-native';
import { MyDeck } from '../../../components/templates';
import { useGetAllDecksQuery } from '../../../services/deck';

export default function Home({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { data, error } = useGetAllDecksQuery();

  console.log(JSON.stringify(data, null, 2));
  console.log(JSON.stringify(error, null, 2));
  
  const decks = [
    {
      id: 1,
      title: 'Seconde Guerre Mondiale',
      numberOfCards: 43,
      icon: 'book',
      isEditable: true,
    },
    {
      id: 2,
      title: 'Bitcoin',
      numberOfCards: 34,
      icon: 'bitcoin',
      isEditable: true,
    },
    {
      id: 3,
      title: "Vocabulaire d'anglais",
      numberOfCards: 27,
      icon: 'language',
      isEditable: false,
    },
  ];

  const onPressEditable = (id) => {
    navigation.navigate('Edition', { id });
  };

  const onPressDeck = (id) => {
    Alert.alert(
      'Confirmation',
      'Es-tu prêt pour lancer la session ?',
      [
        {
          text: 'Annuler',
          style: 'cancel',
        },
        {
          text: 'Oui',
          onPress: () => navigation.navigate('Game', { id }),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <MyDeck.Library
      modalVisible={modalVisible}
      onBackDropPress={() => setModalVisible(false)}
      onPressButton={() => setModalVisible(!modalVisible)}
      decks={decks}
      onPressEditable={onPressEditable}
      onPressDeck={onPressDeck}
    />
  );
}
