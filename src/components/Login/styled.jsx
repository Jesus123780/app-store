import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { backgroundC, backgroundP, variantPrimaryC } from '../../../ignore/Constants'
import { wp } from '../../validation'

export const Container = styled.View`
    align-items: center;
    flex: 1;
    padding-top: ${wp(5)}px;
    background-color: ${backgroundP};
`
export const BoxTitle = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: ${wp(90)}px;
    padding: ${wp(1.5)}px ${wp(5)}px;
    border-bottom-left-radius: ${wp(4.5)}px;
    border-bottom-right-radius: ${wp(4.5)}px;
    background-color: ${backgroundC};
`
export const ContainerCard = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`
export const Card = styled.TouchableOpacity`
    width: ${wp(35)}px;
    margin: ${wp(5)}px;
    justify-content: center;
    align-items: center;
    padding: ${wp(4)}px ${wp(4)}px;
    border-radius: 10px;
    background-color: ${backgroundC};
`
export const Title = styled.Text`
    color: ${({ color }) => color || variantPrimaryC};
    font-size: ${({ size }) => size || wp(3.2)}px;
    margin-top: ${wp(2)}px;
    font-family: ${({ family }) => family ? family : 'PFontBold'};
`
/* Sombra */
export const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.08,
        shadowRadius: 8.5,
        elevation: 7
    }
})