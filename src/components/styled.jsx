
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
    }
`
