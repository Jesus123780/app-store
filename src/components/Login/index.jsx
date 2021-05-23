import React from 'react'
import { onSurfaceC, primaryC } from '../../../ignore/Constants'
import { numberFormat, wp } from '../../validation'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { IconMoney, IconMobCredit, IconCompany, IconPesoF } from '../../../assets/icons'
import { ProfileCardV } from '../../components/ProfileCard'
import { ScrollView } from 'react-native-gesture-handler'
import { Container, BoxTitle, ContainerCard, Card, styles, Title } from './styled'

export const HomeV = ({ navigation, data, loading }) => (
    <Container>
        <ProfileCardV data={data} navigation={navigation} loading={loading} />
        <BoxTitle style={styles.shadow} >
            <Title color={onSurfaceC} size={wp(3.5)} family='PFontRegular' numberOfLines={1}>Mi inversión</Title>
            <Title size={wp(7)}>$ {numberFormat(data.investment)}</Title>
        </BoxTitle>
        <ScrollView showsVerticalScrollIndicator={false}>
            <ContainerCard>
                <Card onPress={() => navigation.navigate('Money')} style={styles.shadow}>
                    <IconMoney size={wp(16)} />
                    <Title>Mi Dinero</Title>
                </Card>
                <Card onPress={() => navigation.navigate('Consolidated')} style={styles.shadow}>
                    <MaterialCommunityIcons name='consolidate' size={wp(14)} color={primaryC} />
                    <Title>Consolidados</Title>
                </Card>
                <Card onPress={() => navigation.navigate('CreditCompanies')} style={styles.shadow}>
                    <IconMobCredit size={wp(16)} />
                    <Title>Créditos</Title>
                </Card>
                <Card onPress={() => navigation.navigate('Companies')} style={styles.shadow}>
                    <IconCompany size={wp(16)} />
                    <Title>Empresas</Title>
                </Card>
                <Card onPress={() => navigation.navigate('Plans')} style={styles.shadow}>
                    <IconPesoF size={wp(16)} />
                    <Title>Planes</Title>
                </Card>
                <Card onPress={() => navigation.navigate('InBox')} style={styles.shadow}>
                    <MaterialIcons name='email' size={wp(12)} color={primaryC} />
                    <Title>Mensajes</Title>
                </Card>
            </ContainerCard>
        </ScrollView>
    </Container>
)