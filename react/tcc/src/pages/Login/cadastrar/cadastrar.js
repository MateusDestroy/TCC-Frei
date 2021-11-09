import {ConteinerCadastrar} from './styled'

import Cabecalho from '../../../components/cabecalho/cabecalho'

import Rodape from '../../../components/rodape/rodape'


export default function Cadastrar() {
    return (

   
        
            <ConteinerCadastrar>
                <Cabecalho/>
                <div className = "conteinercadastro">
                    
                    <div className = "Titulo">Cadastrar-se:</div>
        
        
                    <div className = "caixa1-inputs">
                        <div className="isafoi">
                            <div className = "input-nome"> Nome: <input className = "Nome" try = "text" /> </div>
                            <div className = "input-sobrenome">Sobrenome: <input className = "Sobrenome"/> </div>
                        </div>
                           <div className="ok"> 
                                <div className="carolfoi"> 
                                    <div className = "select-sexo"> Sexo: </div>
                                    <select name="select">
                                        <option value="valor1" selected>Selecionar</option>
                                        <option value="valor2">Mulher Cis</option>
                                        <option value="valor3">Homem Cis</option>
                                        <option value="valor2">Mulher Trans</option>
                                        <option value="valor3">Homem Trans</option>
                                        <option value="valor2" >Não Binário</option>
                                        <option value="valor3">Outros</option>
                                    </select>
                                </div>
                                <div className = "input-CPF"> CPF:  <input className = "CPF"/>   </div>
        
                        </div>
        
                  
        
        
        
                     <div className="opa"> 
                     <div className="nascimento"> <h4>Data de Nascimento: </h4> <input type="number"/>  <input  type="number"/> <input style={{width: '5em'}} type="number" />  </div>
                        <div className = "input-tele"> Telefone: <input className = "Telefone"/> </div>
                        </div>
                    </div>
        
        
                    <div className = "caixa2-inputs">
                    <div className = "input - email"> Email: <input className = "Email" try = "text" /> </div>
                </div>
        
                 <div className="senha"> 
                    <div className = "input - Senha"> Senha: <input className = "Senha" try = "text" /> </div>  
                    <div className = "input - Repetir Senha"> Repetir Senha: <input className = "Repetir"/> </div>
                    </div> 
        
                    <div className = "caixa3-inputs">
                    <div className = "input - endereço"> Endereço: <input className = "Endereço" try = "text" /> </div>
                    <div className = "input - cep"> Cep: <input className = "Cep"/> </div>
        </div> 
        
            <div className="cidade"> 
                    <div className = "input - cidade"> Cidade: <input className = "Cidade" try = "text"/> </div>
                    <div className = "input - numero"> Número: <input className = "Número" /> </div>
             </div>
              
               <div className="complemento"> 
                    <div className = "input - complemento"> Complemento: <input className = "Complemento" try = "text" /> </div>
               </div>
        
                    <div className="Botaomae"> 
                    <div className = "botão1"> <button> Cancelar </button> </div> 
                    <div className = "botão"> <button> Cadastrar </button> </div>
                </div>
        
                    </div>
        
                <div className="as">
                <Rodape />
                </div>
             
            </ConteinerCadastrar>
        
            )
            
        }