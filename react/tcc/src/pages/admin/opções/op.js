import {ConteinerOP} from './styled'
import OptLista from "../../../components/BarOption/index"
import { Link } from "react-router-dom"

export default function op () {

    return ( 
        <ConteinerOP>
            <div className= "PAGINA">

             <OptLista/>
            <div className = " caixa1">
            <Link  to="./CadastraProduto"> <div class = "kkk">
                <div className = "img"> 
                <img src= "./assets/imagens/5c48b961e2b44d01e38a26a2_NEX_produtos 1.png" height= "150"alt=""/>
                </div>

                 <div className = "subtitulo">
                    Cadastrar Produtos
                </div>      
            </div> </Link> 
            </div> 

            <Link  to="./Gerenciadorpt"> <div className = " caixa2">
                <div className = "img"> 
                <img src= "./assets/imagens/icone6.png" height= "150"alt=""/>
                </div>

                   <div className = "subtitulo">
                    Gerenciador de Pedidos
                </div>   
            </div> </Link> 
            </div>
        </ConteinerOP>
       
     ) }

