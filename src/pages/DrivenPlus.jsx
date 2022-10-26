import styled from 'styled-components'
import planos from '../planos'
const SubsBuy = styled.main`
    height: 667px;
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0E0E13;
    color: #FFFFFF;
    .topo{
        margin-top: 87px;
    }
    .form{
        display: flex;
        flex-direction: column;
    }
`
export default function DrivenPlus() {

    return (
        <SubsBuy>
            <div className="topo">
                <img src={planos[0].logo} alt="" />
                <h1>Driven Plus</h1>
            </div>
            <div className="info">
                <h5>Benefícios:</h5>
                <ol>
                    <li>Brindes exclusivos</li>
                    <li>Materiais bônus de web</li>
                </ol>
            </div>
            <div className="form">
                <input type="text" placeholder='Nome impresso no cartão'/>
                <input type="text" placeholder='Digitos do cartão'/>
                <div className="verso">
                    <input type="text" placeholder=''/>
                    <input type="text" placeholder=''/>
                </div>
                <input type="button" value="ASSINAR" />
            </div>
        </SubsBuy>
    )
}