import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import AuthStack from './navigation/AuthStack';
import MainStack from './navigation/MainStack';
import { useDispatch, useSelector } from 'react-redux';

import { StripeProvider } from '@stripe/stripe-react-native';
import { useStripeKeyQuery } from '../services/stripe';
import { useNetworkState } from 'expo-network';
import { logout } from '../store/userSlice';
import { Alert } from 'react-native';

const Application = () => {
  const dispatch = useDispatch();
  const [connected, setConnected] = useState(true);
  const networkState = useNetworkState();

  const RootStack = createStackNavigator();
  const token = useSelector((state) => state.user.token);
  const { data } = useStripeKeyQuery();

  useEffect(() => {
    if (networkState.isConnected === false) {
      setConnected(false);
    }
  }, [networkState]);

  useEffect(() => {
    if (!connected) {
      dispatch(logout());
      Alert.alert('Vous avez été déconnecté', 'Avez vous rebranché votre box internet ?');
    }
  }, [connected]);

  return (
    <StripeProvider
      publishableKey={data?.key}
      // merchantIdentifier='merchant.identifier'
      // urlScheme='your-url-scheme'
    >
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {token ? (
          <RootStack.Screen name='MainStack' component={MainStack} />
        ) : (
          <RootStack.Screen name='AuthStack' component={AuthStack} />
        )}
      </RootStack.Navigator>
    </StripeProvider>
  );
};

export default Application;
