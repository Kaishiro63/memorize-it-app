import { Alert } from 'react-native';
import { MyDeck } from '../../../components/templates';

export default function Home({ navigation, route }) {
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
      onPressButton={() => console.log('CircleButton')}
      decks={decks}
      onPressEditable={onPressEditable}
      onPressDeck={onPressDeck}
    />
  );
}