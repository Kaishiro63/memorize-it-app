import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AuthStack from './navigation/AuthStack';
import MainStack from './navigation/MainStack';

const Application = () => {
  const RootStack = createStackNavigator();

  // const isLogged = false;
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {/* {isLogged ? ( */}
      <RootStack.Screen name='AuthStack' component={AuthStack} />
      {/* // ) : ( */}
      <RootStack.Screen name='MainStack' component={MainStack} />
      {/* // )} */}
    </RootStack.Navigator>
  );
};

export default Application;
