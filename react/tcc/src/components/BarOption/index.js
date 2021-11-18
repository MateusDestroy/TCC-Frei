
import { Link } from "react-router-dom"
import {ConteinerAdmBar} from "./styled"


export default function ListaOpt() {
    return (
        <ConteinerAdmBar>
           <div className = "kkkk">
              <Link to="/CadastraProduto">      <div className= "op-01"> ADICIONAR PRODUTO      </div> </Link>
              <Link  to="./Gerenciadorpt">       <div className= "op-01"> GERENCIADOR DE PRODUTO </div> </Link>
              <Link  to="/Navegação">    <div className= "op-01"> PROCESSO DOS PEDIDOS   </div> </Link>
                </div> 
             


                
        </ConteinerAdmBar>

    )
    
}