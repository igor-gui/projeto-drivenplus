import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataStyle } from "../components/styled";
import arrowBack from '../images/arrowBack.svg'
import { AuthContext } from "../contexts/auth";
import { alterarUsuario } from "../services/api";


export default function UserUpdate() {
    const { user , setUser } = useContext(AuthContext)

    const [form, setForm] = useState({ name: user.name, cpf: user.cpf, email: user.email, currentPassword: '', newPassword: '' })

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const nav = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        alterarUsuario(form, user.token)
            .then((res) => {
                setUser({...user, name: form.name, email: form.email, password: form.password})
                nav('/home')
            })
            .catch((err) => console.log(err.response.data))
    }
    return (
        <UserDataStyle>
            <Link to={`/users/${user.id}`} className='home'>
                <img src={arrowBack} alt="" />
            </Link>
            <form className="data" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder={user.name} onChange={(e) => handleForm(e)} />
                <input type="text" disabled='disabled' name="cpf" placeholder={user.cpf} />
                <input type="text" name="email" placeholder={user.email} onChange={(e) => handleForm(e)} />
                <input type="password" name="currentPassword" placeholder='Senha atual' onChange={(e) => handleForm(e)} />
                <input type="password" name="newPassword" placeholder='Nova senha' onChange={(e) => handleForm(e)} />
                <input className="botao" type="submit" value='SALVAR' />
            </form>
        </UserDataStyle>
    )
}