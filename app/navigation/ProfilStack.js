import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderOptions } from '../../components/molecules/Native';
import Profil from '../Main/Profil/Profil';

const ProfilStack = () => {
  const ProfilStack = createStackNavigator();
  return (
    <ProfilStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfilStack.Screen
        options={HeaderOptions({ title: 'Profil', isNotHeaderLeft: true })}
        name='Profil'
        component={Profil}
      />
    </ProfilStack.Navigator>
  );
};

export default ProfilStack;
