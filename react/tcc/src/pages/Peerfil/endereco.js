import {ConteinerPerfils} from './styled'

import Tiras from '../../components/listras/index'
import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho/cabecalho'

import Rodape from '../../components/rodape/rodape'

export default function Perfil() {
    return(

        <ConteinerPerfils>
            <Cabecalho />
            <h1> Meus endereços </h1>
            <Tiras />
            <h5>Gerenciar e proteger sua conta </h5>
            <div className="per-box1"> 
                <div className="per-contas"> 
                    <div className="mi"> <img src="./assets/imagens/logo de user.png" alt="" width="12%" height="5%"/> <h3>  Minha Conta </h3> </div>
                    <Link to="/perfil">  <div> Perfil</div> </Link>
                    <Link to="/endereco"> <div  style={{color: '#006BA1E5'}}> Endereços</div> </Link>
                    <Link to="/senha"> <div> Trocar senha</div> </Link>
                </div>
                <div className="tabela">
                    <div className="en-endereco">
                    <div className="en-box"> 
                         <div className="no"> 
                            <div style={{marginRight: '20px'}}>Nome Completo: </div> <div> Luiz Fernado da Silva Pereira</div> 
                        </div>
                        <div className="bot"> 
                          <div> Alterar </div> <div> Apagar  </div> 
                        </div>  
                    </div>
                    <div className="tel"> 
                        <div style={{marginRight: '20px', paddingLeft: '3.7em'}}>Telefone: </div> <div> (+55) 11 99999-9999</div> 
                    </div>
                     <div className="end"> 
                         <div style={{marginRight: '20px', paddingLeft: '3.7em'}}>Endereço: </div> <div> R das Orquídeas, 80, Jardim Azano II  São Paulo-São Paulo 04854500</div> 
                     </div>
                    </div>


                    <div className="en-endereco">
                    <div className="en-box"> 
                         <div className="no"> 
                            <div style={{marginRight: '20px'}}>Nome Completo: </div> <div> Luiz Fernado da Silva Pereira</div> 
                        </div>
                        <div className="bot"> 
                          <div> Alterar </div> <div> Apagar  </div> 
                        </div>  
                    </div>
                    <div className="tel"> 
                        <div style={{marginRight: '20px', paddingLeft: '3.7em'}}>Telefone: </div> <div> (+55) 11 99999-9999</div> 
                    </div>
                     <div className="end"> 
                         <div style={{marginRight: '20px', paddingLeft: '3.7em'}}>Endereço: </div> <div> R das Orquídeas, 80, Jardim Azano II  São Paulo-São Paulo 04854500</div> 
                     </div>
                    </div>
                    </div>
                
            </div>
            <div className="but"> Confirmar</div>
         <Rodape/>
        </ConteinerPerfils>
    )
    
}