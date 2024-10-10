import { Text } from 'react-native';

import { useSession } from '../ctx';
import { Container } from '../../components/atoms';
import { List } from '../../components/organisms';

export default function Index() {
  const { signOut } = useSession();

  const deckData = [
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
      isEditable: false,
    },
    {
      id: 3,
      title: "Vocabulaire d'anglais",
      numberOfCards: 27,
      icon: 'language',
      isEditable: true,
    },
  ];

  return (
    <Container.ScreenBase centered isNotPadding>
      <Text
        onPress={() => {
          signOut();
        }}
      >
        Sign Out
      </Text>

      <List.DeckList data={deckData} />
    </Container.ScreenBase>
  );
}
