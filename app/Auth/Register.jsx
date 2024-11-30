import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input } from '../../components/atoms';
import { useDispatch } from 'react-redux';
import { login } from '../../store/userSlice';

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    // if (isSuccess) {
    //   dispatch(login(data.token.token));
    // }
    // deconstruire le isSuccess de la nouvelle requete register pour mettre le token dans le store
    // lors de l'inscription de l'utilisateur est un succès
  }, [isSuccess]);

  return (
    <View>
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
      <Input.TextInput
        value={fullName}
        onChangeText={(text) => setFullName(text)}
        placeholder='Nom complet'
        containerStyle={`margin-bottom : 40px`}
      />
    </View>
  );
};

export default Register;
