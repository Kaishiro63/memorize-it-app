import React, { useState } from 'react';
import { Alert } from 'react-native';
import { MyDeck } from '../../../components/templates';
import { useGetAllDecksQuery } from '../../../services/deck';

export default function Home({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { data, error } = useGetAllDecksQuery();

  console.log(JSON.stringify(data, null, 2));
  console.log(JSON.stringify(error, null, 2));

  const [dropdownValue, setDropdownValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

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

  const dropdownData = [
    { label: 'Maths', value: '1' },
    { label: 'Histoire', value: '2' },
    { label: 'Géo', value: '3' },
    { label: 'Football', value: '4' },
    { label: 'Jeux Vidéos', value: '5' },
    { label: 'Tennis', value: '6' },
    { label: 'Japonnais', value: '7' },
    { label: 'Anglais', value: '8' },
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
      dropdownData={dropdownData}
      modalVisible={modalVisible}
      isFocus={isFocus}
      dropdownValue={dropdownValue}
      onBackDropPress={() => setModalVisible(false)}
      onPressButton={() => setModalVisible(!modalVisible)}
      decks={decks}
      onPressEditable={onPressEditable}
      onPressDeck={onPressDeck}
    />
  );
}
