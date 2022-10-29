import { Link, useParams } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { BuyForm, SubsBuy } from '../components/styled'
import { pegarPlano } from '../services/api'
import { AuthContext } from '../contexts/auth'
import prancheta from '../images/prancheta.svg'
import money from '../images/money.svg'
import arrowBack from '../images/arrowBack.svg'
import ComfirmPurcharse from '../components/ConfirmPurcharse'

export default function Purcharse() {

    const { user } = useContext(AuthContext)
    const { planId } = useParams()
    const [data, setData] = useState({})
    const [beneficios, setBeneficios] = useState([])
    const [showConfirm, setShowConfirm] = useState(false)
    const [form, setForm] = useState({
        membershipId: planId,
        cardName: "",
        cardNumber: "",
        securityNumber: undefined,
        expirationDate: ""
    })

    useEffect(() => {
        pegarPlano(planId, user.token)
            .then((res) => {
                setData(res.data)
                setBeneficios(res.data.perks)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.response.data)
            })
    }, [])

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(form)
        setShowConfirm(!showConfirm)
    }



    return (
        <>
            <SubsBuy>
                {
                showConfirm ?
                    <ComfirmPurcharse
                        showConfirm={showConfirm}
                        setShowConfirm={setShowConfirm}
                        price={data.price}
                        name={data.name}
                        formData={form}
                    />
                    :
                    ''
                }

                <Link to='/subscriptions'><img src={arrowBack} alt="" /></Link>
                <div className="topo">
                    <img onClick={() => console.log(planId)} src={data.image} alt="" />
                    <h1 className='titulo'>{data.name}</h1>
                </div>
                <div className="info">
                    <h5><img src={prancheta} alt="" /> Benefícios:</h5>
                    <ul>
                        {beneficios.map((e, i) => <li key={e.id}>{/* {i+1}.  */}{e.title}</li>)}
                    </ul>
                    <h5><img src={money} alt="" /> Preço:<br /> R$ {data.price} cobrados mensalmente</h5>
                </div>
                <BuyForm className="form" onSubmit={(e) => handleSubmit(e)}>
                    <input name='cardName' type="text" placeholder='Nome impresso no cartão' onChange={(e) => handleForm(e)} />
                    <input name='cardNumber' type="text" placeholder='Digitos do cartão' onChange={(e) => handleForm(e)} />
                    <div className="verso">
                        <input name='securityNumber' type="text" placeholder='Código de segurança' onChange={(e) => handleForm(e)} />
                        <input name='expirationDate' type="text" placeholder='Validade' onChange={(e) => handleForm(e)} />
                    </div>
                    <input className='botao' type="submit" value="ASSINAR" />
                </BuyForm>
            </SubsBuy>
        </>
    )
}