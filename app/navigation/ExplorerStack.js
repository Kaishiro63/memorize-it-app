import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import List from '../Main/Explorer/List';
import { HeaderOptions } from '../../components/molecules/Native';
import Detail from '../Main/Explorer/Detail';

const ExplorerStack = () => {
  const ExplorerStack = createStackNavigator();
  return (
    <ExplorerStack.Navigator screenOptions={{ headerShown: false }}>
      <ExplorerStack.Screen
        options={HeaderOptions({ title: 'Decks publique', isNotHeaderLeft: true })}
        name='Explorer'
        component={List}
      />
      <ExplorerStack.Screen
        options={HeaderOptions({ title: 'Detail', isNotHeaderLeft: true })}
        name='Detail'
        component={Detail}
      />
    </ExplorerStack.Navigator>
  );
};

export default ExplorerStack;
