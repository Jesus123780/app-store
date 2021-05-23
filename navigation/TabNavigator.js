import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IconBar, styles } from './styled'
import { Home } from '../src/pages/Home'

const Tab = createBottomTabNavigator()
const primaryC = 'red'
const onVariantSurfC = 'red'
const backgroundC = 'red'
export default props => {
    // valida que el usuario inversionista exista
    console.log(props?.navigation)
    return (
        <Tab.Navigator initialRouteName='Home' tabBarOptions={{ activeTintColor: primaryC, inactiveTintColor: onVariantSurfC, showLabel: false, style: styles.tab }}>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{ tabBarIcon: ({ color, focused }) => <IconBar bgColor={focused ? backgroundC : 'transparent'}></IconBar> }}
            />
        </Tab.Navigator>
    )
}