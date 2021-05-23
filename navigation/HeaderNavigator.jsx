import React from 'react'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'
import { backgroundC } from '../ignore/Constants'
import { Header, Button, Row, styles } from './styled'
import { wp } from '../src/validation'
import { Logo } from '../assets/icons'
import { Gravatar } from 'react-native-gravatar'

export const HeaderNavigator = ({ scene: { route, descriptor: { navigation } } }) => {
    let handleBack = false
    let screen = ''
    let camera = false
    switch (route?.name) {
    case 'MoneyReports':
        handleBack = true
        screen = 'Money'
        break;
    case 'CreditPayrolls':
        handleBack = true
        screen = 'CreditCompanies'
        break;
    case 'CreditDetail':
        handleBack = true
        screen = 'CreditPayrolls'
        break;
    case 'PlanTerms':
        handleBack = true
        screen = 'Plans'
        break;
    case 'CompaniesRegister':
        handleBack = true
        screen = 'Companies'
        break;
    case 'Camera':
        camera = true
        break;
    default:
        break;
    }
    if (camera) return <></>
    return (
        <Header>
            <Button onPress={() => handleBack ? navigation.navigate(screen) : navigation.openDrawer()}>
                {handleBack ? <MaterialIcons name='arrow-back-ios' size={wp(6)} color={backgroundC} /> : <FontAwesome name='bars' size={wp(6)} color={backgroundC} />}
            </Button>
            <Button onPress={() => navigation.navigate('Home')}>
                <Logo width={wp(20)} style={{ marginTop: wp(2) }} height='100%' color={backgroundC} />
            </Button>
            <Row>
                <Button onPress={() => navigation.navigate('InBox')}><MaterialIcons name='email' size={wp(6)} color={backgroundC} /></Button>
                <Button onPress={() => navigation.navigate('Profile')}>
                    <Gravatar style={styles.gravatar} options={{ email: 'luisdavid25540055@gmail.com', parameters: { 'size': '200', 'd': 'mm' }, secure: true }}/>
                </Button>
            </Row>
        </Header>
    )
}