import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Auth/Login'
import Register from '../Auth/Register'

const AuthStack = () => {
    const AuthStack = createStackNavigator()
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name='Login' component={Login} />
            <AuthStack.Screen name='Register' component={Register} />
        </AuthStack.Navigator>
    )
}

export default AuthStack
