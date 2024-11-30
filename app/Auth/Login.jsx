import { Typo, Container, ContainerButton, Input } from '../../components/atoms';
import { useEffect, useState } from 'react';
import { useLoginMutation } from '../../services/user';
import { useDispatch } from 'react-redux';
import { login } from '../../store/userSlice';
import { Button } from '../../components/molecules';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('quentin@gmail.com');
  const [password, setPassword] = useState('123456');
  const [postlogin, { data, isSuccess, error }] = useLoginMutation();
  const dispatch = useDispatch();

  console.log(JSON.stringify(error, null, 2));

  console.log(email, password);

  const pressLogin = () => {
    postlogin({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(login(data.token.token));
    }
  }, [isSuccess]);

  return (
    <Container.ScreenBase centered>
      <Typo.Title>Memorize It</Typo.Title>
      <Input.TextInput
        placeholder='Email'
        value={email}
        onChangeText={(text) => setEmail(text)}
        containerStyle={`margin-bottom : 20px`}
      />
      <Input.TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder='Mot de passe'
        secureTextEntry={true}
        containerStyle={`margin-bottom : 40px`}
      />
      <ContainerButton.ClassicButton
        onPress={() => pressLogin()}
        backgroundColor={({ theme }) => theme.lightPurple}
      >
        <Typo.SubTitle color={({ theme }) => theme.white}>Connexion</Typo.SubTitle>
      </ContainerButton.ClassicButton>

      {error?.status === 422 &&
        Array.isArray(error?.data?.errors) &&
        error.data.errors.map((errorItem, index) => (
          <Typo.Paragraph key={index} color={({ theme }) => theme.red}>
            {errorItem.message}
          </Typo.Paragraph>
        ))}
      {error?.status === 400 && (
        <Typo.Paragraph color={({ theme }) => theme.red}>{error?.data?.message}</Typo.Paragraph>
      )}
      <Button.TextButton name='Inscription' onPress={() => navigation.navigate('Register')} />
    </Container.ScreenBase>
  );
}
