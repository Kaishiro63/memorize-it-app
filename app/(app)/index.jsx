import { Text, View } from 'react-native';

import { useSession } from '../ctx';
import { Element } from '../../components/molecules';

export default function Index() {
  const { signOut } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          signOut();
        }}
      >
        Sign Out (gros caca)
      </Text>
      <Element.Deck title={'le titre'} />
    </View>
  );
}
