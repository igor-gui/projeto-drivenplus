import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import logoDriven from '../images/driven.svg'
import { UserPass } from '../components/styled'
import { entrar } from '../services/api'
import { AuthContext } from '../contexts/auth'

export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' })
    const nav = useNavigate()
    const { setUser } = useContext(AuthContext)

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    function handleSubmit(e) {
        e.preventDefault()
        console.log(form)
        entrar(form)
            .then((res) => {
                console.log(res.data)
                setUser(res.data)
                
                if(res.data.membership === null){
                nav('/subscriptions')
                }
                if(res.data.membership){
                nav('/home')
                }
            })
            .catch((err) => console.log(err.response.status))
    }

    return (
        <UserPass>
            <img src={logoDriven} alt="" />
            <form className="form" onSubmit={handleSubmit}>
                <input name='email' type="text" placeholder='E-mail' onChange={(e) => handleForm(e)} />
                <input name='password' type="password" placeholder='Senha' onChange={(e) => handleForm(e)} />
                <input className='botao' type="submit" value="ENTRAR" />
            </form>
            <Link to='/sign-up'>Não possuí uma conta? Cadastre-se</Link>
        </UserPass>
    )
}