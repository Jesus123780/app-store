import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const Title = styled.Text`
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