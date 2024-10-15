import { Typo, Container, ContainerButton } from '../../components/atoms';
import colors from '../../utils/Colors';
// import * as Google from 'expo-auth-session/providers/google';
import { useEffect } from 'react';
import { View } from 'react-native';
import { useLoginMutation } from '../../services/user';
import { useDispatch } from 'react-redux';
import { login } from '../../store/userSlice';

export default function Login({ navigation }) {
  const [postlogin, { data, isSuccess, error }] = useLoginMutation();
  const dispatch = useDispatch();

  console.log(error);
  const pressLogin = () => {
    postlogin({ email: 'user_prof@example.com', password: '123456' });
  };

  useEffect(() => {
    if (isSuccess) {
      console.log('success', JSON.stringify(data?.token?.token, null, 2));
      dispatch(login(data.token.token));
    }
  }, [isSuccess]);

  // const [userInfo, setUserInfo] = useState('');
  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   iosClientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID_IOS,
  //   webClientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID_WEB,
  // });

  // useEffect(() => {
  //   handleSignInWithGoogle();
  // }, [response]);

  // const handleSignInWithGoogle = async () => {
  //   if (response?.type === 'success') {
  //     await getUserInfo(response.authentication.accessToken);
  //   }
  // };

  // const getUserInfo = async (token) => {
  //   try {
  //     const response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     const user = await response.json();
  //     setUserInfo(user);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <Container.ScreenBase centered>
      <Typo.Title>Memorize It</Typo.Title>
      <ContainerButton.ClassicButton
        onPress={() => pressLogin()}
        backgroundColor={colors.lightPurple}
      >
        <Typo.SubTitle color={colors.white}>Connexion VIP</Typo.SubTitle>
      </ContainerButton.ClassicButton>
      <View style={{ marginVertical: 12 }} />
      <ContainerButton.ClassicButton
        onPress={() => promptAsync()}
        backgroundColor={colors.lightPurple}
      >
        <Typo.SubTitle color={colors.white}>Google Auth</Typo.SubTitle>
      </ContainerButton.ClassicButton>
    </Container.ScreenBase>
  );
}
