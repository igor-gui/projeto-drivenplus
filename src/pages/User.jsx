import { Link } from 'react-router-dom'
import { useContext } from 'react'
import arrowBack from '../images/arrowBack.svg'
import { AuthContext } from '../contexts/auth'
import { UserDataStyle } from '../components/styled'

export default function User() {

    const { user } = useContext(AuthContext)

    return (
        <UserDataStyle>
            <Link to='/home' className='home'>
                <img src={arrowBack} alt="" />
            </Link>
            <div className="data">
                <input disabled='disabled' type="text" placeholder={user.name} />
                <input disabled='disabled' type="text" placeholder={user.cpf} />
                <input disabled='disabled' type="text" placeholder={user.email} />
            </div>
            <Link to='update' className='botao'>ATUALIZAR</Link>
        </UserDataStyle>
    )
}

