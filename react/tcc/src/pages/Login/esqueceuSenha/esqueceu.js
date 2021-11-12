import { ConteinerEsqueceu } from "./styled"
import { Link } from "react-router-dom"


export default function Esqueceu() {

    return (
        <ConteinerEsqueceu>
            <div className = "ConteinerEsqueceu">
                <div className  = "Login">

                <div className = "titulo">
                <div className  = "logar"> Esqueci minha senha </div>
                </div>

                <div className = "texto"> Identifique-se para receber um e-mail com as informações para trocar a sua senha! </div>

               <div className = "inputs">
               <div className  = "email"> <input type = "email"  placeholder= "Digite seu email"/>  </div>

                </div>

                 <div className = "botão"> <Link  to = "/NovaSenha"> <button> Recuperar senha </button>  </Link> </div>
                 <div className = "botão"> <Link to = "/"> <button> Voltar </button> </Link> </div>

                </div>

             </div>





        </ConteinerEsqueceu>

    )
}