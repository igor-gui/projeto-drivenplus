
import styled from 'styled-components'

export const UserPass = styled.main`
    font-family: 'Roboto';
    min-height: 667px;
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0E0E13;
    img {
    margin-bottom: 100px;
    }
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        justify-content: center;
        margin-bottom: 24px;
        input {
            padding-left: 14px;
            height: 52px;
            width: 299px;
            border-radius: 8px;
            border: 0;
            display: flex;
            align-items: center;
            justify-content: center;

        }
        .botao{
            padding-left: 0;
            width: 298px;
            background-color: #FF4791;
            color: #FFFFFF;
            margin-top: 8px;
            font-family: 'Roboto';
            font-size: 14px;    
            font-weight: 700;
        }
    }
    a {
        font-family: 'Roboto';
        font-size: 14px;
        font-weight: 400;
        color: white;
        cursor: pointer;
    }
`
export const BuyForm = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        justify-content: center;
        margin-bottom: 24px;
        input {
            padding-left: 14px;
            box-sizing: border-box;
            height: 52px;
            width: 299px;
            border-radius: 8px;
            border: 0;
            display: flex;
        }
        .verso{
            display: flex;
            justify-content: center;
            gap: 9px;
            input {
                height: 52px;
                width: 145px;
                border-radius: 8px;
            }
        }
        .botao{
            padding-left: 0;
            width: 298px;
            background-color: #FF4791;
            color: #FFFFFF;
            margin-top: 8px;
            font-family: 'Roboto';
            font-size: 14px;    
            font-weight: 700;
            background-color: #FF4791;
            cursor: pointer;
        }
    
        `

export const SubsBuy = styled.main`
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 400;
    height: 667px;
    width: 375px;
    display: flex;
    flex-direction: column;
    background-color: #0E0E13;
    color: #FFFFFF;

        a{
            position: fixed;
            z-index: 1;
            top: 0;
            box-sizing: border-box;
            padding-left:22px;
            padding-top: 22px;
        }
        ul{
            gap:3px;
            list-style: decimal;
        }
        .titulo{
            margin-top: 11px;
            font-family: 'Roboto';
            font-size: 32px;
            font-weight: 700;
            text-align: left;
            margin-bottom: 22px;

        }
        .info{
            display: flex;
            flex-direction: column;
            margin-left: 44px;
            margin-bottom: 34px;
            gap: 11px;
            ul {
                display: flex;
                flex-direction: column;
                margin-left: 15px;
            }
            br {
                margin-bottom: 4px;
            }
        }
        .topo{
            margin-top: 87px;
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                width: 139.38px;
            }

        }
        .form{
            display: flex;
            flex-direction: column;
        }
`

export const ConfirmArea = styled.div`
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        position: fixed;
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            
            height: 210px;
            width: 248px;
            border-radius: 12px;
            background-color: #FFFFFF;
            p {
                margin-top: 33px;
                color: black;
                font-family: 'Roboto';
                font-size: 18px;
                font-weight: 700;
                text-align: center;
            }
            .buttons {
                color: white;
                display: flex;
                flex-direction: row;
                gap: 14px;
                input:first-child {
                    background-color: #CECECE;
                }
                input:last-child {
                    background-color: #FF4791;
                }
                input {
                    height: 52px;
                    width: 95px;
                    border-radius: 8px;
                    border: 0;
                    cursor: pointer;
                }
            }
        }
    `
export const UserDataStyle = styled.main`
min-height: 667px;
min-width: 375px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: #0E0E13;
    .home {
        height: 32px;
        width: 28px;
        position: fixed;
        top: 22px;
        left: 22px;
    }
    .data{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        margin-bottom: 16px;
        input {
            height: 52px;
            width: 299px;
            border-radius: 8px;
            text-align: left;
            font-size: 14px;
            font-family: 'Roboto';
            padding-left: 14px;
            background-color: white;
        }
        .botao {
            height: 52px;
            width: 299px;
            border-radius: 8px;
            background-color: #FF4791;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            text-decoration: none;
            border: 0;
    
            font-family: 'Roboto';
            font-size: 14px;
            font-weight: 700;
            color: white;
        }
    }
    .botao {
            height: 52px;
            width: 299px;
            border-radius: 8px;
            background-color: #FF4791;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            text-decoration: none;
            border: 0;
    
            font-family: 'Roboto';
            font-size: 14px;
            font-weight: 700;
            color: white;
        }
`