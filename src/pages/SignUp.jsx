import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserPass } from "../components/styled";
import { cadastrar } from "../services/api";

export default function SignUp() {

    const [form, setForm] = useState({ email: "", name: "", cpf: "", password: "" })
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        console.log(form)
        cadastrar(form)
            .then((res) => {
                alert('funcionou')
                navigate('/')
            })
            .catch((err) => {
                console.log(err.response.data)
                alert('errado')
            })

    }

    function handleForm(e) {
        console.log(form)
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <UserPass>
            <form className="form" onSubmit={handleSubmit}>
                <input name="name" placeholder="Nome" type="text" onChange={(e) => handleForm(e)} />
                <input name="cpf" placeholder="CPF" type="text" onChange={(e) => handleForm(e)} />
                <input name="email" placeholder="E-mail" type="text" onChange={(e) => handleForm(e)} />
                <input name="password" placeholder="Senha" type="password" onChange={(e) => handleForm(e)} />
                <input className="botao" type="submit" value="CADASTRAR" />
            </form>
            <Link to='/'>Já possuí uma conta? Entre</Link>
        </UserPass>
    )
}