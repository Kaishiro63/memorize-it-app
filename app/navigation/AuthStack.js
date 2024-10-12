import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Auth/Login'

const AuthStack = () => {
    const AuthStack = createStackNavigator()
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name='Login' component={Login} />
        </AuthStack.Navigator>
    )
}

export default AuthStack
