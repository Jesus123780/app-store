import styled from 'styled-components/native'
import Constants from 'expo-constants'
import { hp, wp } from '../src/validation'
const backgroundC = 'red'
const onSurfaceC = 'red'
const primaryC = 'red'
const surfaceC = 'red'
export const Header = styled.View`
    width: 100%;
    height: ${hp(7) + Constants.statusBarHeight}px;
    background-color: ${primaryC};
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-end;
    padding: ${wp(2)}px ${wp(2)}px 0;
`
export const Row = styled.View`
    flex-direction: row;
`
export const OptionButton = styled.TouchableOpacity`
   justify-content: flex-start;
    flex-direction: row;
    margin: 10px 17px;  
`
export const EndBox = styled.View`
    margin-bottom: ${wp(1.5)}px;
    border-top-color: #f4f4f4;
    border-top-width: ${wp('1%')}px;
`
export const IconBox = styled.View`
    width: 35px;
    height: 35px;
    align-items: center;
	border-radius: ${wp(50)}px;
    background: ${({ bgColor }) => bgColor || primaryC};
	justify-content: center;
`
export const IconBannerBox = styled.View`
    width: 40px;
    height: 40px;
    align-items: center;
	border-radius: ${wp(50)}px;
    background: ${({ bgColor }) => bgColor || primaryC};
	justify-content: center;
    margin: 0 10px;
`
export const OptionButtonMenu = styled.View`
    flex-direction: row;
    padding: 10px 16px 10px 10px;
`
export const TextBox = styled.Text`
    color: ${backgroundC};
    font-size: ${wp(3.5)}px;
    font-family: PFontLight;
`
export const TextBoxIcon = styled.View`
    align-items: center;
    justify-content: center; 
`
export const Icon = styled.View`
    margin: auto;
    margin-right: ${wp(2)}px;
`
export const BoxCircle = styled.View`
    width: 28px;
    height: 28px;
	justify-content: center;
`
export const Text = styled.Text`
    width: ${wp(50)}px;
    text-align: left;
    color: ${onSurfaceC};
    font-size: ${wp(3.5)}px;
    font-family: PFontRegular;
    margin: ${({ margin }) => margin ? margin : '10px 20px'};
`
export const Button = styled.TouchableOpacity`
    padding: ${wp(3)}px;
`
export const IconBar = styled.View`
    padding: ${wp(1.5)}px ${wp(6)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${wp(100)}px;
    margin-bottom: ${wp(2)}px;
    background-color: ${({ bgColor }) => bgColor};
`
export const OptionsBox = styled.View`
    width: 100%;
    height: 90px;
    padding: 10px;
    background-color: ${primaryC};
`
export const ContainerUser = styled.View`
    padding: 10px;
    flex-direction: row;
    align-items: center;
`
export const BoxProfile = styled.View`
    width: 80%;
    margin-left: 10px;
    flex-direction: column;
`
export const DrawerSection = styled.View`
    margin-top: 15px;
`
export const Title = styled.Text`
    font-size: ${({ size }) => size ? size : wp(3.3)}px;
    color: ${({ color }) => color ? color : `${surfaceC}`};
    font-family: ${({ family }) => family || 'PFontBold'};
`
export const styles = {
    gravatar: {
        width: wp(7),
        height: wp(7),
        borderRadius: wp(100)
    },
    gravatarDrawer: {
        width: wp(10),
        height: wp(10),
        borderRadius: wp(2)
    },
    tab: {
        backgroundColor: '#F7F7F7',
        paddingVertical: 5,
        shadowColor: 'transparent',
        shadowOffset: {
            width: 0,
            height: hp(1)
        },
        shadowOpacity: 0.1,
        shadowRadius: 8.5,
        elevation: 20
    }
}