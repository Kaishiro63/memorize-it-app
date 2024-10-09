import { router } from 'expo-router';
import { View } from 'react-native';
import { Button, Typo, Container } from '../components/atoms';

import { useSession } from './ctx';

export default function Login() {
  const { login } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Typo.Title
        onPress={() => {
          login('token');
          router.replace('/');
        }}
      >
        Sign In
      </Typo.Title>
      <Button.ClassicButton backgroundColor={'red'}>
        <Typo.Paragraph>Sign In</Typo.Paragraph>
      </Button.ClassicButton>
    </View>
  );
}
