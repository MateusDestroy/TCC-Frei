import {ConteinerCategoria} from './styled'
import { Link } from "react-router-dom"




export default function Categoria() {
    return(
       <ConteinerCategoria>
                <div className = "ConteCategorias">
                <div className = "titulo"> CATEGORIA </div>

                 <hr width= "150"/> 
                 <div className = "conteudo">
                 <div> Favoritos da casa </div>
                 <div> <Link to = "/Salgados"> Salgados </Link></div>
                 <div><Link to = "/Doces"> Doces </Link></div>
                 <div> Bebidas </div>
                 </div>
                 </div>


       </ConteinerCategoria>
    )
    
}



