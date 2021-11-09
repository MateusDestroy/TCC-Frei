import {ConteinerCadastrar, Container} from './styled'

import Cabecalho from '../../../components/cabecalho/cabecalho'

import Rodape from '../../../components/rodape/rodape'
import { Link } from 'react-router-dom'


export default function Cadastrar() {
    return (

    <Container>    
        <ConteinerCadastrar>
        <Cabecalho />
       <div className="box">
           <div className="as"> Realizar Cadastro    </div>
           <div className="box-cadas"> 
                <div className="name"  style={{marginLeft:'53px'}} >
                    <div className="nome"> Nome: </div>
                    <div className="inputs"> <input type="name" />  </div>
                </div>
                <div className="name"> 
                    <div className="nome"> Sobrenome: </div>
                    <div className="inputs"> <input type="name" /> </div>
                </div> 
           </div>

           <div className="box-cadas"> 
                <div className="name">
                    <div className="nome"   style={{marginLeft:'62px'}}> Sexo: </div>
                        <select>
                            <option value="volvo">Escolher Gênero</option>
                            <option value="saab">Masculino</option>
                            <option value="mercedes">Feminino</option>
                            <option value="audi">Outros</option>
                        </select>                
                    </div>
                <div className="name"> 
                    <div className="nome"> CPF: </div>
                    <div className="inputs"> <input type="" /> </div>
                </div> 
           </div>

           <div className="box-cadas"> 
                <div className="name">
                    <div className="nome"   style={{marginLeft:'37px'}}> Telefone: </div>
                    <div className="inputs"> <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>  </div>
                </div>
                <div className="name"> 
                    <div className="nome"> Data de Nascimento: </div>
                    <div className="inputs"> <input type="date" /> </div>
                </div> 
           </div>

           <div className="box-cadas"> 
                <div className="name"   style={{marginLeft:'59px'}}>
                    <div className="nome" > Email:</div>
                    <div className="inputs"> <input type="email" />  </div>
                </div>
                <div className="name"> 
                    <div className="nome"> Senha: </div>
                    <div className="inputs"> <input type="password" /> </div>
                </div> 
           </div>

           <div className="box-cadas"> 
                <div className="name">
                    <div className="nome"    style={{marginLeft:'33px'}}> Endereço: </div>
                    <div className="inputs"> <input type="" />  </div>
                </div>
                <div className="name"> 
                    <div className="nome"> CEP: </div>
                    <div className="inputs"> <input type="" /> </div>
                </div> 
           </div>

           <div className="box-cadas" > 
                <div className="name"   style={{marginLeft:'49px'}}>
                    <div className="nome"> Cidade: </div>
                    <div className="inputs"> <input type="" />  </div>
                </div>
                <div className="name"> 
                    <div className="nome"> Número:  </div>
                    <div className="inputs"> <input type="number" /> </div>
                </div> 
                <div className="name">
                    <div className="nome"> Complemento: </div>
                    <div className="inputs">  <input type="" />  </div>
                </div>
           </div>

           <div className="cadas"> 
                    <div className="pt"> 
                        <div className="nomes">   <button className="ds">  Limpar </button> </div>                     
                        <div className="nomes">  <Link to="./home"> <button className="js">Cadastrar</button> </Link> </div> 
                    </div>
           </div>
           
       </div>
        </ConteinerCadastrar>
        <Rodape />
    </Container>

    )
    
}
