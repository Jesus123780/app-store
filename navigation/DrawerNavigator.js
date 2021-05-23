import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigator from './TabNavigator'
import { DrawerContent } from './DrawerContent'
import { Home } from '../src/pages/Home'
const Drawer = createDrawerNavigator()

export default () => (
    <Drawer.Navigator initialRouteName='Main' drawerContent={props => <DrawerContent {...props} />} screenOptions={{ headerShown: true, header: HeaderNavigator }}>
        <Drawer.Screen name='Main' title='Mili - Tu Crédito de Confianza' component={TabNavigator} />
        <Drawer.Screen name='Home' title='Mili - Registro del Inversionista' component={Home} />
    </Drawer.Navigator>
)