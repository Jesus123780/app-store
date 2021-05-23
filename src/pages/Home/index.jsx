import React from 'react'
import { HomeC } from '../../container/Home'
// import { tokenAuth } from '../../validation'

export const Home = props => {
    // // valida que el usuario inversionista exista
    // useEffect(() => {
    //     props.navigation.addListener('focus', () => tokenAuth(props.navigation))
    // }, [props])

    return (
        <HomeC {...props} />
    )
}