import {ConteinerCadastrar, Container} from './styled'
import axios from 'axios'

import InputMask from 'react-input-mask';
import Rodape from '../../../components/rodape/rodape'
import { useState } from "react"
import { useHistory } from "react-router"

import Api from '../../../services/api'
import Cookie from 'js-cookie'
const api = new Api ();


export default function Cadastrar() {

    const[ nome, setNome] = useState ('');
    const[ sobrenome, setSobrenome] = useState ('');
    const[ cpf, setCpf] = useState ('');
    const[ nascimento, setNascimento] = useState ('');
    const[ telefone, setTelefone] = useState ('');
    const[ email, setEmail] = useState ('');
    const[ senha, setSenha] = useState ('');
    const[sexo, setSexo] = useState ('');
    const[ cep , setcep] = useState('');
    const[ endereco , Setendereco] = useState('');
    const[ numero , setnumero] = useState('');
    const[ complemento , setcomplemento] = useState('');
    const[ cidade , setcidade] = useState('');
    const [loc, setLoc] = useState({});

    const paginas = useHistory();




    async function buscarCep() {
        const resp = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        setLoc(resp.data);
      
    
    }


      


     
   async function limpar() {
    setNome('')
    setSobrenome ('')
    setCpf ('')
    setNascimento ('')
    setTelefone ('')
    setEmail ('')
    setSenha ('')
    setSexo ('')
    setcep ('')
    Setendereco ('')
    setnumero ('')
    setcomplemento ('')
    setcidade ('')
    }
 

const inserir = async () => {
    if (nome === '' || sobrenome === ''|| telefone === ''|| cpf === ''|| nascimento === ''|| sexo === ''|| email === ''|| senha === ''|| cep === ''|| numero === '')
        alert ('Todos Campos tem quer ser Preenchido. Exceto (Complemento)')
    
        else {
            let r = await api.CadastarCliente(nome, sobrenome, telefone, cpf, nascimento, sexo, email, senha, cep, endereco, numero, complemento, cidade );
{
    let r = await api.login(email, senha);
        
        if (r.erro) {
            alert (`usuario não foi cadastrado`)
        } else {
            Cookie.set('usuario-logado', JSON.stringify(r));
            paginas.push('/')
        }
}        }

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
                        <select value={sexo} onChange={e => setSexo(e.target.value)}>
                            <option value="">Escolher Gênero</option>
                            <option value="Masculino"  >Masculino</option>
                            <option value="Feminino"  >Feminino</option>
                            <option value="Outros"  >Outros</option>
                        </select>                
                    </div>
                <div className="name"> 
                    <div className="nome"> CPF: </div>
                    <div className="inputs" > <InputMask mask="999.999.999-99"   value={cpf} onChange = {e => setCpf(e.target.value)} /> </div>
                </div> 
           </div>

           <div className="box-cadas"> 
                <div className="name">
                    <div className="nome"   style={{marginLeft:'37px'}}> Telefone: </div>
                    <div className="inputs">  <InputMask mask="(99) 99999-9999"  value={telefone} onChange = {e => setTelefone(e.target.value)}/>  </div>
                </div>
                <div className="name"> 
                    <div className="nome"> Data de Nascimento: </div>
                    <div className="inputs"> <InputMask mask="99/99/9999" value={nascimento} onChange = {e => setNascimento(e.target.value)} /> </div>
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
                    <div className="nome"    style={{marginLeft:'33px'}}> CEP: </div>
                    <div className="inputs"> <InputMask mask="99999-999"   value={cep}  onChange = {e => setcep(e.target.value)} onBlur={buscarCep}  />  </div>
                </div>
                <div className="name"> 
                    <div className="nome"> Endereço: </div>
                    <div className="inputs"> <input type="" value={endereco}  onChange = {e => Setendereco(e.target.value)}/> </div>
                </div> 
           </div>

           <div className="box-cadas" > 
                <div className="name"   style={{marginLeft:'49px'}}>
                    <div className="nome"> Cidade: </div>
                    <div className="inputs"> <InputMask mask="" value={cidade} onChange = {e => setcidade(e.target.value)} />  </div>
                </div>
                <div className="name"> 
                    <div className="nome"> Número:  </div>
                    <div className="inputs"> <input type="number" value={numero} onChange = {e => setnumero(e.target.value)}/> </div>
                </div> 
                <div className="name">
                    <div className="nome"> Complemento: </div>
                    <div className="inputs">  <input type="" value={complemento} onChange = {e => setcomplemento(e.target.value)}/>  </div>
                </div>
           </div>

           <div className="cadas"> 
                    <div className="pt"> 
                        <div className="nomes">   <button className="ds" onClick={limpar}>  Limpar </button> </div>                     
                        <div className="nomes" onClick={inserir}>   <button className="js">Cadastrar</button>  </div> 
                    </div>
           </div>
           
       </div>
        </ConteinerCadastrar>
        <Rodape />
    </Container>

    )
    
}