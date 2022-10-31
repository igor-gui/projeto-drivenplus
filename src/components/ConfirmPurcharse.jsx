import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";
import { assinarPlano } from "../services/api";
import { ConfirmArea } from "./styled";

export default function Confirm({ price, name, showConfirm, setShowConfirm, formData }) {

    const { user } = useContext(AuthContext)
    const nav = useNavigate()

    function confirmar(body, token) {
        assinarPlano(body, token)
            .then((res) => {
                console.log(res.data)
                nav('/home')

            })
            .catch((err) => console.log(err.response.data))
    }

    return (
        <ConfirmArea>
            <div>
                <p>Tem certeza que deseja assinar o plano {name} (R$ {price})?</p>
                <div className="buttons">
                    <input onClick={() => setShowConfirm(!showConfirm)} type="button" value="Não" />
                    <input onClick={() => confirmar(formData, user.token)} type="button" value='Sim' />
                </div>
            </div>
        </ConfirmArea>
    )
}
