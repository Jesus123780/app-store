import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '../src/pages/Login'
import { Home } from '../src/pages/Home'
const Stack = createStackNavigator()

export const LoginStackNavigator = () => (
    <Stack.Navigator headerMode='float' initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' title='Mili - Iniciar Sesión' component={Login} />
        <Stack.Screen name='Home' title='Mili - Registro' component={Home} />
    </Stack.Navigator>
)
