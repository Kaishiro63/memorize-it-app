import { Text, View } from 'react-native';

import { useSession } from '../ctx';

export default function Explore() {
  const { signOut } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          signOut();
        }}
      >
        EXPLORE
      </Text>
    </View>
  );
}
