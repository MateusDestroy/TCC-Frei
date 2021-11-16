import {ConteinerCadastrar, Container} from './styled'


import Rodape from '../../../components/rodape/rodape'
import { useState } from "react"
import { useHistory } from "react-router"

import Api from '../../../services/api'
const api = new Api ();


export default function Cadastrar() {

    const[ nome, setNome] = useState ('');
    const[ sobrenome, setSobrenome] = useState ('');
    const[ cpf, setCpf] = useState ('');
    const[ nascimento, setNascimento] = useState ('');
    const[ telefone, setTelefone] = useState ('');
    const[ email, setEmail] = useState ('');
    const[ senha, setSenha] = useState ('');

    const paginas = useHistory();


 

const inserir = async () => {
    let r = await api.CadastarCliente(nome, sobrenome,telefone, cpf, nascimento);
             if (r.erro) {
            alert (`${r.erro}`)
        } else {
            alert ('ve se foi')
        }


 }



    return (

    <Container>    
        <ConteinerCadastrar>
       <div className="box">
           <div className="as"> Realizar Cadastro    </div>
           <div className="box-cadas"> 
                <div className="name"  style={{marginLeft:'53px'}} >
                    <div className="nome"> Nome: </div>
                    <div className="inputs"> <input type="name" value={nome} onChange = {e => setNome(e.target.value)} />  </div>
                </div>
                <div className="name"> 
                    <div className="nome"> Sobrenome: </div>
                    <div className="inputs"> <input type="name" value={sobrenome} onChange = {e => setSobrenome(e.target.value)}  /> </div>
                </div> 
           </div>

           <div className="box-cadas"> 
                <div className="name">
                    <div className="nome"   style={{marginLeft:'62px'}}> Sexo: </div>
                        <select>
                            <option value="">Escolher Gênero</option>
                            <option value="Masculino"  >Masculino</option>
                            <option value="Feminino"  >Feminino</option>
                            <option value="Outros"  >Outros</option>
                        </select>                
                    </div>
                <div className="name"> 
                    <div className="nome"> CPF: </div>
                    <div className="inputs" > <input type=""  value={cpf} onChange = {e => setCpf(e.target.value)} /> </div>
                </div> 
           </div>

           <div className="box-cadas"> 
                <div className="name">
                    <div className="nome"   style={{marginLeft:'37px'}}> Telefone: </div>
                    <div className="inputs"> <input type="tel"  value={telefone} onChange = {e => setTelefone(e.target.value)}/>  </div>
                </div>
                <div className="name"> 
                    <div className="nome"> Data de Nascimento: </div>
                    <div className="inputs"> <input type="text" value={nascimento} onChange = {e => setNascimento(e.target.value)} /> </div>
                </div> 
           </div>

           <div className="box-cadas"> 
                <div className="name"   style={{marginLeft:'59px'}}>
                    <div className="nome" > Email:</div>
                    <div className="inputs"> <input type="email" value={email} onChange = {e => setEmail(e.target.value)}  />  </div>
                </div>
                <div className="name"> 
                    <div className="nome"> Senha: </div>
                    <div className="inputs"> <input type="password" value={senha} onChange = {e => setSenha(e.target.value)} /> </div>
                </div> 
           </div>

           <div className="box-cadas"> 
                <div className="name">
                    <div className="nome"    style={{marginLeft:'33px'}}> Endereço: </div>
                    <div className="inputs"> <input type=""  />  </div>
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
                        <div className="nomes" onClick={inserir}>   <button className="js">Cadastrar</button>  </div> 
                    </div>
           </div>
           
       </div>
        </ConteinerCadastrar>
        <Rodape />
    </Container>

    )
    
}