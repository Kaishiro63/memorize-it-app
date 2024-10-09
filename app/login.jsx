import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { useSession } from './ctx';

export default function Login() {
  const { login } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        style={{ fontFamily: 'Poppins-Bold' }}
        onPress={() => {
          login('token');
          router.replace('/');
        }}
      >
        Sign In
      </Text>
    </View>
  );
}
