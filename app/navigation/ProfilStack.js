import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderOptions } from '../../components/molecules/Native';
import Details from '../Main/Profil/Details';

const ProfilStack = () => {
    const ProfilStack = createStackNavigator();
    return (
        <ProfilStack.Navigator screenOptions={{ headerShown: false }}>
            <ProfilStack.Screen
                options={HeaderOptions({ title: 'Profil', isNotHeaderLeft: true })}
                name='Details'
                component={Details}
            />
        </ProfilStack.Navigator>
    );
};

export default ProfilStack;
