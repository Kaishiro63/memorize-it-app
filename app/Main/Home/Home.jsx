import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { MyDeck } from '../../../components/templates';
import {
  useCreateDeckMutation,
  useGetAllCategoriesQuery,
  useGetAllDecksQuery,
} from '../../../services/deck';
import { useIsFocused } from '@react-navigation/native';

export default function Home({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(null);
  const [title, setTitle] = useState('');
  const isFocused = useIsFocused();

  const { data: decks, refetch: decksRefetch, isLoading: decksLoading } = useGetAllDecksQuery();
  const [createDeck, { data, isSuccess }] = useCreateDeckMutation();
  const { data: categories } = useGetAllCategoriesQuery();

  useEffect(() => {
    decksRefetch();
  }, [isFocused]);

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate('Edition', { id: data.id });
      setModalVisible(false);
      setTitle('');
    }
  }, [isSuccess]);

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
      decksLoading={decksLoading}
      refreshDeckList={decksRefetch}
      createDeck={() => {
        createDeck({ title, categoryId: dropdownValue.value });
      }}
      inputValue={title}
      setInputValue={(value) => setTitle(value)}
      dropdownData={categories}
      modalVisible={modalVisible}
      setDropdownValue={(value) => {
        setDropdownValue(value);
      }}
      dropdownValue={dropdownValue}
      onBackDropPress={() => setModalVisible(false)}
      onPressButton={() => setModalVisible(!modalVisible)}
      decks={decks}
      onPressEditable={onPressEditable}
      onPressDeck={onPressDeck}
    />
  );
}
