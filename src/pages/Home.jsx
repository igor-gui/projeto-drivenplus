import logoPlus from '../images/LogoPlus.svg'
import prof from '../images/prof.svg'
import styled from 'styled-components'

export default function Home() {


    return (
        <HomeS>
            <header>
                <img className='logo' src={logoPlus} alt="" />
                <img src={prof} alt="" />
            </header>

            <div className="perks-box">

                <h1>Olá Fulano</h1>

                <div className="perks">
                    <input type="button" value='Solicitar brindes' />
                    <input type="button" value='Materiais bônus de web' />
                    <input type="button" value='Aulas bônus de tech' />
                </div>
            </div>

            <div className="menu">
                <input type="button" value='Mudar plano' />
                <input className='cancel' type="button" value='Cancelar plano' />
            </div>
        </HomeS>
    )
}

const HomeS = styled.main`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #0E0E13;
        height: 667px;
        position: relative;
        header {
            position: fixed;
            top: 0;
            display: flex;
            gap: 206px;
            img {
                margin-top: 22px;
                margin-right: 22px;
            }

            .logo {
                margin-top: 32px;
                margin-left: 38px;
            }
        }
    h1 {
        font-family: 'Roboto';
        font-size: 24px;
        font-weight: 700;
        color: white;
        text-align: center;
    }
    .perks-box {
        margin-top: 95px;
        h1{
            margin-bottom: 53px;
        }
    }
    input {
        border: 0;
        font-family: 'Roboto';
        font-size: 14px;
        font-weight: 700;
        text-align: center;
        color: white;
        cursor: pointer;

    }
    .logo{
        height: 50.866729736328125px;
        width: 74.52371215820312px;
    }
    header img {
        height: 32.9375px;
        width: 34px;
    }
    .perks{ 
        display: flex;
        flex-direction: column;
        gap: 8px;
        h1 {
            font-family: 'Roboto';
            font-size: 24px;
            font-weight: 700;
        }
        input {
            height: 52px;
            width: 299px;
            border-radius: 8px;
            background-color: #FF4791;
            display: flex;
            flex-direction: column;
        }
    }
    
    .menu {
        position: absolute;
        bottom: 12px;
        min-width: max-content;
        display: flex;
        flex-direction: column;
        gap: 8px;
        .cancel{
            background-color: #FF4747;
        }
        input{
            height: 52px;
            width: 299px;
            border-radius: 8px;
            background-color: #FF4791;
        }
    }

`