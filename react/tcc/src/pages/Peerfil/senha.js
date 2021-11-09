import {ConteinerPerfils} from './styled'

import Tiras from '../../components/listras/index'
import { Link } from 'react-router-dom'

import Cabecalho from '../../components/cabecalho/cabecalho'
import Rodape from '../../components/rodape/rodape'

export default function Perfil() {
    return(

        <ConteinerPerfils>
            <Cabecalho />
            <h1> Definir Senha </h1>
            <Tiras />
            <h5>Para a segurança da sua conta, não compartilhe sua senha com mais ninguém </h5>
            <div className="per-box2"> 
                <div className="per-contas"> 
                    <div className="mi"> <img src="./assets/imagens/logo de user.png" alt="" width="12%" height="5%"/> <h3>  Minha Conta </h3> </div>
                    <Link to="/perfil"> <div> Perfil</div></Link>
                    <Link to="/endereco"> <div> Endereços</div> </Link>
                    <Link to="/senha"> <div style={{color: '#006BA1E5'}}> Trocar Senha</div> </Link>
                </div>
                <div className="sen-tabela">
                    <div className="sen"> <div style={{marginLeft: '7px'}}> Nova Senha: </div> <input /> </div>
                    <div className="sen"> <div> Repita Senha: </div> <input /> </div>
                    <div className="sen"> <div style={{marginLeft: '40px'}}>  Código: </div> <input type="number"/> <button> Enviar Código de Verificação</button> </div>
                    <div className="buts"> Confirmar</div>
                </div>
                
            </div>
            <div className="as">
                <Rodape />
            </div>
         </ConteinerPerfils>
    )
    
}