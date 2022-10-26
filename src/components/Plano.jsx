import styled from 'styled-components'

const StyledPlan = styled.div`
    height: 180px;
    width: 290px;
    border-radius: 12px;
    display: flex;
    gap: 22px;
    justify-content: center;
    align-items: center;
    border: 3px solid #7E7E7E;
    margin-bottom: 10px;

    img {
        height: 95.13327026367188px;
        width: 139.37762451171875px;
    }
    h2 {
        font-family: 'Roboto';
        font-size: 24px;
        font-weight: 700;
        color: #Ffff;
    }
    
`

export default function Plano({ logo, price }) {
    return (
        <StyledPlan>
            <img src={logo} alt="" />
            <h2>R$ {price}</h2>
        </StyledPlan>
    )
}