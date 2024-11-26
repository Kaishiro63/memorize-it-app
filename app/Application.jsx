import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AuthStack from './navigation/AuthStack';
import MainStack from './navigation/MainStack';
import { useSelector } from 'react-redux';

import { StripeProvider } from '@stripe/stripe-react-native';
import { useStripeKeyQuery } from '../services/stripe';

const Application = () => {
  const RootStack = createStackNavigator();
  const token = useSelector((state) => state.user.token);
  const { data } = useStripeKeyQuery();

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
