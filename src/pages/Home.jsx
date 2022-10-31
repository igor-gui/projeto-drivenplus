import prof from '../images/prof.svg'
import styled from 'styled-components'
import { useContext } from 'react'
import { AuthContext } from '../contexts/auth'
import { cancelarPlano } from '../services/api'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {

    const { user } = useContext(AuthContext)


    const nav = useNavigate()

    function deletarPlano(token){
            cancelarPlano(token)
            .then((res) => {
                console.log(res.data)
                alert('Plano cancelado com sucesso')
                nav('/subscriptions')
            })
            .catch((err) => console.log(err.response.data))
    }

    return (
        <HomeS>
            <header>
                <img className='logo' src={user.membership.image} alt="" />
                <Link to={`/users/${user.id}`} className='goToUser'><img src={prof} alt="" /></Link>
            </header>

            <div className="perks-box">

                <h1>Olá {user.name}</h1>

                <div className="perks">
                    {user.membership.perks.map((e) => <a key={e.id} href={e.link} rel='noreferrer' target='_blank'>{e.title}</a>) }
                </div>
            </div>

            <div className="menu">
                <Link to='/subscriptions'>Mudar plano</Link>
                <input onClick={() => deletarPlano(user.token)} className='cancel' type="button" value='Cancelar plano' />
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
            .goToUser{
                width: 34px;
                height: 34px;
                background-color: rgba(0 , 0 , 0 , 0);
                img {
                    margin-top: 22px;
                    margin-right: 22px;
                }
            }
            .logo {
                margin-top: 32px;
                margin-left: 38px;
            }
        }
        a{
            height: 52px;
            width: 299px;
            border-radius: 8px;
            background-color: #FF4791;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-family: 'Roboto';
            font-size: 14px;
            font-weight: 700;
            color: white;
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