import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import List from '../Main/Explorer/List'

const ExplorerStack = () => {
    const ExplorerStack = createStackNavigator()
    return (
        <ExplorerStack.Navigator screenOptions={{ headerShown: false }}>
            <ExplorerStack.Screen name='Explorer' component={List} />
        </ExplorerStack.Navigator>
    )
}

export default ExplorerStack
