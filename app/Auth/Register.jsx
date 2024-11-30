import React, { useEffect, useState } from 'react';
import { Container, ContainerButton, Input, Typo } from '../../components/atoms';
import { useDispatch } from 'react-redux';
import { useRegisterMutation } from '../../services/user';
import { login } from '../../store/userSlice';

const Register = () => {
  const dispatch = useDispatch();
  const [register, { isSuccess, data, error }] = useRegisterMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    if (isSuccess) {
      dispatch(login(data.token.token));
    }
  }, [isSuccess, error]);

  return (
    <Container.ScreenBase centered>
      <Typo.Title>S'inscrire</Typo.Title>
      <Input.TextInput
        placeholder='Email'
        value={email}
        type='email'
        onChangeText={(text) => setEmail(text)}
        containerStyle={`margin-bottom : 20px`}
      />
      <Input.TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder='Mot de passe'
        secureTextEntry={true}
        containerStyle={`margin-bottom : 20px`}
      />
      <Input.TextInput
        value={fullName}
        onChangeText={(text) => setFullName(text)}
        placeholder='Nom complet'
        containerStyle={`margin-bottom : 40px`}
      />
      <ContainerButton.ClassicButton
        onPress={() => register({ email, password, fullName })}
        backgroundColor={({ theme }) => theme.lightPurple}
      >
        <Typo.SubTitle color={({ theme }) => theme.white}>S'inscrire</Typo.SubTitle>
      </ContainerButton.ClassicButton>
      {error?.status === 422 &&
        Array.isArray(error?.data?.errors) &&
        error.data.errors.map((errorItem, index) => (
          <Typo.Paragraph key={index} color={({ theme }) => theme.red}>
            {errorItem.message}
          </Typo.Paragraph>
        ))}
      {error?.status === 400 && (
        <Typo.Paragraph color={({ theme }) => theme.red}>{error?.data?.error}</Typo.Paragraph>
      )}
    </Container.ScreenBase>
  );
};

export default Register;
