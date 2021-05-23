import { gql } from '@apollo/client'

export const USE_ONE_INVESTOR = gql`
    query getOneInvestor($state: [Int]) {
        getInvestorById(state: $state) {
            i_id
            ti_id
            typeIdentity {
                ti_name
            }
            i_ideNum
            i_firNam
            i_secNam
            i_firLas
            i_secLas
            i_email
            investorPlans {
                ip_investment
            }
        }
    }
`