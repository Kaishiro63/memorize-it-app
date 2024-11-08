import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import List from '../Main/Explorer/List'
import { HeaderOptions } from '../../components/molecules/Native'

const ExplorerStack = () => {
    const ExplorerStack = createStackNavigator()
    return (
        <ExplorerStack.Navigator screenOptions={{ headerShown: false }}>
            <ExplorerStack.Screen options={HeaderOptions({ title: 'Decks publique', isNotHeaderLeft: true })} name='Explorer' component={List} />
        </ExplorerStack.Navigator>
    )
}

export default ExplorerStack
