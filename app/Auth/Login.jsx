import { Typo, Container, ContainerButton } from '../../components/atoms';
import { useEffect } from 'react';
import { useLoginMutation } from '../../services/user';
import { useDispatch } from 'react-redux';
import { login } from '../../store/userSlice';

export default function Login({ navigation }) {
  const [postlogin, { data, isSuccess, error }] = useLoginMutation();
  const dispatch = useDispatch();

  const pressLogin = () => {
    postlogin({ email: 'quentin@gmail.com', password: '123456' });
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(login(data.token.token));
    }
  }, [isSuccess]);

  return (
    <Container.ScreenBase centered>
      <Typo.Title>Memorize It</Typo.Title>
      <ContainerButton.ClassicButton
        onPress={() => pressLogin()}
        backgroundColor={({ theme }) => theme.lightPurple}
      >
        <Typo.SubTitle color={({ theme }) => theme.white}>Connexion</Typo.SubTitle>
      </ContainerButton.ClassicButton>
      <ContainerButton.ClassicButton
        onPress={() => pressRegister()}
        backgroundColor={({ theme }) => theme.lightPurple}
      >
        <Typo.SubTitle color={({ theme }) => theme.white}>Inscription</Typo.SubTitle>
      </ContainerButton.ClassicButton>
    </Container.ScreenBase>
  );
}
