import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import DrawerNavigator from './navigation/DrawerNavigator'
import { LoginStackNavigator }  from './navigation/StackNavigator'

export default () => {
    const [login, setLogin] = useState(false)
    return (
        <NavigationContainer>
            {login ? <DrawerNavigator /> : <LoginStackNavigator />}
        </NavigationContainer>
    )
}