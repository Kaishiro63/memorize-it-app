import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Main/Home/Home'
import Game from '../Main/Home/Game'
import Edition from '../Main/Home/Edition'
import { HeaderOptions } from '../../components/molecules/Native'

const HomeStack = () => {
    const HomeStack = createStackNavigator()
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name='Home' options={HeaderOptions({ title: 'Mes Decks', isNotHeaderLeft: true })} component={Home} />
            <HomeStack.Screen name='Game' component={Game} />
            <HomeStack.Screen name='Edition' options={HeaderOptions({})} component={Edition} />
        </HomeStack.Navigator>
    )
}

export default HomeStack
