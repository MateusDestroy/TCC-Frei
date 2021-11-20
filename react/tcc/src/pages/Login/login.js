

import { ConteinerLogin } from "./styled"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useHistory } from "react-router"


import Api from '../../services/api'
import Cookie from "js-cookie"
const api = new Api();


export default function Login() {
    const[ email, setEmail] = useState ('');
    const[ senha, setSenha] = useState ('');

    const paginas = useHistory();

    const logar = async () => {
        let r = await api.login(email, senha);
        
        if (r.erro) {
            alert (`${r.erro}`)
        } else {
            Cookie.set('usuario-logado', JSON.stringify(r));
            paginas.push('/home')
        }

    }
    return (
        <ConteinerLogin>
            <div className = "ConteinerLogin">
                <div className  = "Login">

                <div className = "titulo">
                <div className  = "logar"> Login </div>
                </div>

               <div className = "inputs">
                 <div className  = "email"> <input type = "email"  value={email} onChange = {e => setEmail(e.target.value)}/>  </div>
                 <div className  = "senha"> <input type = "password"value = {senha} onChange = {e => setSenha(e.target.value)}/></div>
                </div>

                 <div className = "botão" onClick={logar}>    <button> Entrar </button>  </div>

             <div className = "func-para-cadastro">
                 <div className = "Esqueceu"> Esqueci a senha <Link to = "/esqueceu"> <span> clique aqui </span></Link></div>
                 <div className = "cria"> <Link  to = "/Cadastra"> Criar conta um conta  </Link> </div> 
                   <Link to="./Loginadm"> <div>Acessar o Adm</div> </Link>
                </div>
       
             </div>
             
            </div>



        </ConteinerLogin>
       
    )
}