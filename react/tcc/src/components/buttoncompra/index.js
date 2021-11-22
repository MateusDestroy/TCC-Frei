
import { BotaoCompra } from "./styled"
import { Link } from "react-router-dom"




export default function botaocompra() {


    return(
        <BotaoCompra>
        <Link to = "/Detalhe">
          <div className = "botão-compra">  <button> Compra </button>  </div>
         </Link>
        </BotaoCompra>
    )
    
}