import { Link } from 'react-router-dom'
import { Conteineradml } from './styled'
import { useState } from "react"
import { useHistory } from "react-router"

import Api from '../../../services/api'
const api = new Api();

export default function Logadm () 
{
    const[ email, setEmail] = useState ('');
    const[ senha, setSenha] = useState ('');

    const paginas = useHistory();

    const logar = async () => {
        let r = await api.login(email, senha);
        
        if (r.erro) {
            alert (`${r.erro}`)
        } else {
            paginas.push('/CadastraProduto')
        }

    }

    return (
        <Conteineradml>
            <div className= "pagina-01">
                <div class= "bbbb">
                    
                <div class="Titulo">
                Seja bem-vindo!
                </div>
                </div>
                <div className= " subtitulo">
                    Acesso ao setor adminstrativo
                    </div>
               <div className=" Caixa-01">
               <div className="n">EMAIL</div>
                    <div class="input-data">
                        <input type="text" value={email} onChange = {e => setEmail(e.target.value)}/>
                        <div className="bord"></div>  
                    </div>
                    
               </div>

               

               <div className=" Caixa-01">
               <div className="g">SENHA</div>
                    <div class="input-datak">
                        <input type="password" value={senha} onChange = {e => setSenha(e.target.value)}/>
                        <div className="bord"></div>    
                    </div>
                    
               </div>

               <div class="botão">
                <button onClick ={logar}> ENTRAR </button> 
               </div>
            </div>

            <div class="logo55">
                <img src = "/assets/imagens/logo1.png" alt="" width="120" />
                <div className="lll">
                    Acesso  adminstrativo da padaria do Intituito Nossa Senhora de Fatíma
                </div>
            </div>
   
        </Conteineradml>
    )
}