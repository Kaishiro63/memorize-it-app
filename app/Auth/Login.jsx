import { Typo, Container, ContainerButton } from '../../components/atoms';
import colors from '../../utils/Colors';
import { useEffect } from 'react';
import { useLoginMutation } from '../../services/user';
import { useDispatch } from 'react-redux';
import { login } from '../../store/userSlice';

export default function Login({ navigation }) {
  const [postlogin, { data, isSuccess, error }] = useLoginMutation();
  const dispatch = useDispatch();

  console.log(error);
  const pressLogin = () => {
    postlogin({ email: 'quentin@gmail.com', password: '123456' });
  };

  useEffect(() => {
    if (isSuccess) {
      console.log('success', JSON.stringify(data?.token?.token, null, 2));
      dispatch(login(data.token.token));
    }
  }, [isSuccess]);

  return (
    <Container.ScreenBase centered>
      <Typo.Title>Memorize It</Typo.Title>
      <ContainerButton.ClassicButton
        onPress={() => pressLogin()}
        backgroundColor={colors.lightPurple}
      >
        <Typo.SubTitle color={colors.white}>Connexion VIP</Typo.SubTitle>
      </ContainerButton.ClassicButton>
      <ContainerButton.ClassicButton
        onPress={() => promptAsync()}
        backgroundColor={colors.lightPurple}
      >
        <Typo.SubTitle color={colors.white}>Google Auth</Typo.SubTitle>
      </ContainerButton.ClassicButton>
    </Container.ScreenBase>
  );
}
