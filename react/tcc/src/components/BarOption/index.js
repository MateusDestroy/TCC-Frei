
import { Link } from "react-router-dom"
import {ConteinerAdmBar} from "./styled"


export default function ListaOpt() {
    return (
        <ConteinerAdmBar>
            <div className = "conteinerBar">
            <div className = "logo2"><img src = "./assets/imagens/logo1.png" alt = ""/> </div>

            <div className = "espaço"> </div>


            <div className = "botõesBar">
             <div className = "botão1"> 
                <div className = "barra"> </div>
               <Link  to="/Navegação">  <div className = "gerenciamento"> Gerenciador de Produto </div> </Link>
            </div>
         
            <div className = "botão1"> 
                <div className = "barra"> </div>
                <Link  to="./Gerenciadorpt">   <div className = "gerenciamento">Gerenciador de Pedidos  </div> </Link>
            </div>

           
            </div>  
         </div>     

        </ConteinerAdmBar>

    )
    
}
