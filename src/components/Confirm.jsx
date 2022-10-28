import { Link } from "react-router-dom";

export default function Confirm(price, name, formData){
    return (
       <>
       <p>Tem certeza que deseja assinar o plano {name} (R$ {price})?</p>
        <input type="submit" value='Sim' />
        <input type="button" value="Não" />
       </>
    )
}