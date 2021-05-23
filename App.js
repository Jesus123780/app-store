import React, { Component } from 'react'
import { Image } from 'react-native'
import * as Updates from 'expo-updates'
import * as Font from 'expo-font'
import Index from './index'
import PFontLight from './assets/fonts/Montserrat-Light.ttf'
import PFontBold from './assets/fonts/Montserrat-Bold.ttf'
import PFontMedium from './assets/fonts/Montserrat-Medium.ttf'
import PFontRegular from './assets/fonts/Montserrat-Regular.ttf'
import Constants from 'expo-constants'
import Splash from './assets/splash.png'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { fontLoaded: false }
    }

    async componentDidMount() {
        // busca actualizaciónes en expo pendientes
        const update = await Updates.checkForUpdateAsync().catch(x => x)
        if (update?.isAvailable) {
            await Updates.fetchUpdateAsync().catch(x => x)
            await Updates.reloadAsync().catch(x => x)
            return
        }

        /** Agrega los tipos de fuente a expo */
        await Font.loadAsync({ PFontLight, PFontBold, PFontMedium, PFontRegular })
        /** activa intl si es android */
        if (Constants.platform.android) {
            // eslint-disable-next-line global-require
            require('intl')
            // eslint-disable-next-line global-require
            require('intl/locale-data/jsonp/de-DE')
        }
        this.setState({ fontLoaded: true })
    }

    render() {
        if (this.state.fontLoaded) return<Index />
        else return <Image source={Splash} style={{ height: '100%', width: '100%' }} />
    }
}