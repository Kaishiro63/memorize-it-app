import { Typo, Container, Button } from '../../components/atoms';
import colors from '../../utils/Colors';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
import { useEffect, useState } from 'react';

export default function Login({ navigation }) {
  const [userInfo, setUserInfo] = useState('');

  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID_IOS,
    webClientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID_WEB,
  });

  useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);

  const handleSignInWithGoogle = async () => {
    if (response?.type === 'success') {
      await getUserInfo(response.authentication.accessToken);
    }
  };

  const getUserInfo = async (token) => {
    try {
      const response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${token}` },
      });

      const user = await response.json();

      console.log(user);
      setUserInfo(user);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container.ScreenBase centered>
      <Button.ClassicButton onPress={() => promptAsync()} backgroundColor={colors.lightPurple}>
        <Typo.SubTitle color={colors.white}>Google Auth</Typo.SubTitle>
      </Button.ClassicButton>
      <Typo.Title>Memorize It</Typo.Title>
      <Button.ClassicButton
        onPress={() => console.log('auth')}
        backgroundColor={colors.lightPurple}
      >
        <Typo.SubTitle color={colors.white}>se connecter en tant que quentin</Typo.SubTitle>
      </Button.ClassicButton>
    </Container.ScreenBase>
  );
}
