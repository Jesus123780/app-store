import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { HomeV } from '../../components/Home'
import { USE_ONE_INVESTOR } from './queries'

export const HomeC = ({ navigation }) => {
    const [investment, setInvestment] = useState(0)
    const [data, setData] = useState({})
    const { data: dataI, loading, called } = useQuery(USE_ONE_INVESTOR, { variables: { state: [0, 1, 2, 3] } })

    // calcula el total de inversión
    useEffect(() => {
        let investmentTot = 0
        if (called) {
            const res = dataI?.getInvestorById
            if (res) {
                (res.investorPlans || []).forEach(x => investmentTot += x.ip_investment || 0)
                setData(res)
            }
        }
        setInvestment(investmentTot)
        return () => {
            setData({})
            setInvestment(0)
        }
    }, [dataI, called])

    return <HomeV
        data={{ ...data, investment }}
        navigation={navigation}
        loading={loading}
    />
}