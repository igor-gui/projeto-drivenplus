// import plans from '../planos'
import Plano from '../components/Plano'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../contexts/auth'
import { pegarPlanos } from '../services/api'



export default function Subscriptions() {

    const {user} = useContext(AuthContext)
    const [plans, setPlans] = useState([])

    useEffect(() => {
        pegarPlanos(user.token)
        .then((res) => setPlans(res.data))
        .catch((err) => console.log(err.response.data))
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <SuscriptionStyle>
            <h1>Escolha seu Plano</h1>
            <div className="planos">
                {plans.map((e) => <Plano id={e.id} key={e.id} logo={e.image} price={e.price} />)}
            </div>
        </SuscriptionStyle>
    )
}

const SuscriptionStyle = styled.main`
    height: 667px;
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0E0E13;
    h1 {
        font-family: 'Roboto';
        font-size: 32px;
        font-weight: 700;
        color: #FFFFFF;
        margin-bottom: 24px;
    }

`
