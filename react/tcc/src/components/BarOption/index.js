
import { Link } from "react-router-dom"
import {ConteinerAdmBar} from "./styled"


export default function ListaOpt() {
    return (
        <ConteinerAdmBar>
           <div className = "bruninho">
              <Link to="/CadastraProduto">      <div className= "Brun"> ADICIONAR PRODUTO      </div> </Link>
              <Link  to="./Gerenciadorpt">       <div className= "Brun2"> GERENCIADOR DE PRODUTO </div> </Link>
              <Link  to="/Navegação">    <div className= "Brun3"> PROCESSO DOS PEDIDOS   </div> </Link>
                </div> 
             


                
        </ConteinerAdmBar>

    )
    
}