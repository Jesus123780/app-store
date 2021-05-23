import React from 'react'
import { View } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
// import { FontAwesome, FontAwesome5, MaterialIcons, AntDesign, Ionicons, MaterialCommunityIcons/*, Foundation*/ } from '@expo/vector-icons'
// import { UPDATE_TOKEN } from '../src/queries/Login'
// import { isLoggedVar } from '../src/apollo/cache'
// import { clearData, numberFormat, setData, wp } from '../src/validation'
import { IconBox, OptionButton, Text, EndBox, Icon, styles, ContainerUser, Title, DrawerSection, OptionsBox, BoxProfile } from './styled'
// import { Context } from '../Context'
// import { apolloClient } from '../src/apollo/client'
// import { USE_ONE_INVESTOR } from '../src/containers/Home/queries'

export const DrawerContent = props => {
    // const [updateToken, { data: dataUP, called: calledUP }] = useMutation(UPDATE_TOKEN)
    // const { balance, setLogin, setBalance } = useContext(Context)
    // const { data: dataI, called } = useQuery(USE_ONE_INVESTOR, { variables: { state: [0, 1, 2, 3] } })

    // calcula el total de inversión
    // useEffect(() => {
    //     let investmentTot = 0
    //     const res = dataI?.getInvestorById
    //     if (called && res) (res.investorPlans || []).forEach(x => investmentTot += x.ip_investment || 0)
    //     setBalance(investmentTot)
    // }, [dataI, called])

    // updateToken()
    // 
    // Actualiza el token
    // useEffect(() => {
    //     const res = dataUP?.refreshUserPayrollToken
    //     if (calledUP && res) {
    //         if (res) setData('tokenAuth', res?.tokenAuth)
    //         else {
    //             clearData().then(() => {
    //                 isLoggedVar({ state: false, expired: true })
    //             })
    //         }
    //     }
    // }, [dataUP, calledUP])

    /**
     * Cierra Sesión
     * @return {void}
     */
    // const handleSignOut = async () => {
    //     apolloClient.clearStore()
    //     await clearData()
    //     setLogin(false)
    //     props.navigation.navigate('Home')
    // }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View>
                    <View>
                        <ContainerUser>
                            <BoxProfile>
                                <Title numberOfLines={1} color={onSurfaceC} size={wp(4)}>{dataI?.getInvestorById?.data?.i_firNam || ''} {dataI?.getInvestorById?.data?.i_secNam || ''} {dataI?.getInvestorById?.data?.i_firLas || ''} {dataI?.getInvestorById?.data?.i_secLas || ''}</Title>
                                <Title numberOfLines={1} color={onSurfaceC} family='PFontLight'>{numberFormat(dataI?.getInvestorById?.data?.i_ideNum || '')}</Title>
                            </BoxProfile>
                        </ContainerUser>
                        <OptionsBox>
                            <Title family='PFontRegular'>Inversión</Title>
                            <Title size={wp(8)}>$ {numberFormat(balance)}</Title>
                        </OptionsBox>
                    </View>

                    <DrawerSection>
                        <OptionButton onPress={() => props.navigation.navigate('Home')}>
                            <IconBox>
                                <FontAwesome name='home' size={wp(5)} color={backgroundC} />
                            </IconBox>
                            <Text>Inicio</Text>
                            <Icon>
                                <FontAwesome5 name='chevron-right' size={wp(3)} color={grayLight} />
                            </Icon>
                        </OptionButton>
                        <OptionButton onPress={() => props.navigation.navigate('Profile')}>
                            <IconBox>
                                <FontAwesome name='user' size={wp(5)} color={backgroundC} />
                            </IconBox>
                            <Text>Perfil de Usuario</Text>
                            <Icon>
                                <FontAwesome5 name='chevron-right' size={wp(3)} color={grayLight} />
                            </Icon>
                        </OptionButton>
                        {/* <OptionButton onPress={() => props.navigation.navigate('Statistics')}>
                            <IconBox>
                                <Foundation name='graph-pie' size={wp(5)} color={backgroundC} />
                            </IconBox>
                            <Text>Estadísticas</Text>
                            <Icon>
                                <FontAwesome5 name='chevron-right' size={wp(3)} color={grayLight} />
                            </Icon>
                        </OptionButton> */}
                        <OptionButton onPress={() => props.navigation.navigate('Money')}>
                            <IconBox>
                                <MaterialIcons name='attach-money' size={wp(5)} color={backgroundC} />

                            </IconBox>
                            <Text>Mi dinero</Text>
                            <Icon>
                                <FontAwesome5 name='chevron-right' size={wp(3)} color={grayLight} />
                            </Icon>
                        </OptionButton>
                        <OptionButton onPress={() => props.navigation.navigate('Consolidated')}>
                            <IconBox>
                                <MaterialCommunityIcons name='consolidate' size={wp(5)} color={backgroundC} />
                            </IconBox>
                            <Text>Mis Consolidados</Text>
                            <Icon>
                                <FontAwesome5 name='chevron-right' size={wp(3)} color={grayLight} />
                            </Icon>
                        </OptionButton>
                        <OptionButton onPress={() => props.navigation.navigate('CreditCompanies')}>
                            <IconBox>
                                <AntDesign name='creditcard' size={wp(4)} color={backgroundC} />
                            </IconBox>
                            <Text>Créditos</Text>
                            <Icon>
                                <FontAwesome5 name='chevron-right' size={wp(3)} color={grayLight} />
                            </Icon>
                        </OptionButton>
                        <OptionButton onPress={() => props.navigation.navigate('Companies')}>
                            <IconBox>
                                <Ionicons name='ios-business-outline' size={24} color={backgroundC} />
                            </IconBox>
                            <Text>Mis Empresas</Text>
                            <Icon>
                                <FontAwesome5 name='chevron-right' size={wp(3)} color={grayLight} />
                            </Icon>
                        </OptionButton>
                        <OptionButton onPress={() => props.navigation.navigate('Plans')}>
                            <IconBox>
                                <Ionicons name='ios-document-attach' size={wp(5)} color={backgroundC} />
                            </IconBox>
                            <Text>Planes</Text>
                            <Icon>
                                <FontAwesome5 name='chevron-right' size={wp(3)} color={grayLight} />
                            </Icon>
                        </OptionButton>
                        <OptionButton onPress={() => props.navigation.navigate('InBox')}>
                            <IconBox>
                                <MaterialIcons name='email' size={wp(5)} color={backgroundC} />
                            </IconBox>
                            <Text>Bandeja de mensajes</Text>
                            <Icon>
                                <FontAwesome5 name='chevron-right' size={wp(3)} color={grayLight} />
                            </Icon>
                        </OptionButton>
                        <OptionButton onPress={() => props.navigation.navigate('Terms')}>
                            <IconBox>
                                <AntDesign name='info' size={wp(6)} color={backgroundC} />
                            </IconBox>
                            <Text>Términos</Text>
                            <Icon>
                                <FontAwesome5 name='chevron-right' size={wp(3)} color={grayLight} />
                            </Icon>
                        </OptionButton>
                    </DrawerSection>

                </View>
            </DrawerContentScrollView>
            <EndBox>
                <OptionButton onPress={handleSignOut}>
                    <FontAwesome name='sign-in' size={wp(6)} color={primaryC} />
                    <Text margin='auto 18px'>Cerrar Sesión</Text>
                </OptionButton>
            </EndBox>
        </View>
    );
}