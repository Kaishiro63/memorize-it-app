import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AuthStack from './navigation/AuthStack';
import MainStack from './navigation/MainStack';
import { useSelector } from 'react-redux';

const Application = () => {
  const RootStack = createStackNavigator();
  const token = useSelector((state) => state.user.token);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {token ? (
        <RootStack.Screen name='MainStack' component={MainStack} />
      ) : (
        <RootStack.Screen name='AuthStack' component={AuthStack} />
      )}
    </RootStack.Navigator>
  );
};

export default Application;
