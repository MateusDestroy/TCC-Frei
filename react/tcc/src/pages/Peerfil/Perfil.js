import {ConteinerPerfils} from './styled'

import Tiras from '../../components/listras/index'

import { Link } from 'react-router-dom'

import Cabecalho from '../../components/cabecalho/cabecalho'
import Api from '../../services/api';
import Rodape from '../../components/rodape/rodape'
import { useState } from 'react';

const api = new Api();

export default function Perfil() {

    const [nome, SetNome] = useState('');
    const [sexo, SetSexo] = useState('');
    const [nascimento, SetNascimento] = useState('');
    const [email, SetEmail] = useState('');
    const [idAlterando, SetIdAlterando] = useState (0);





    async function Alterar() {
        await api.AlterarCadastro(idAlterando,  nome, sexo, nascimento, email);
        alert('Cliente alterado, Com Sucesso!');
        SetIdAlterando()
    }


    


    return(

        <ConteinerPerfils>
            <Cabecalho />
            <h1> Meu Perfil </h1>
            <Tiras />
            <h5>Gerenciar e Proteger sua Conta </h5>
            <div className="per-box"> 
                <div className="per-contas"> 
                    <div className="mi"> <img src="./assets/imagens/logo de user.png" alt="" width="12%" height="5%"/> <h3>  Minha Conta </h3> </div>
                    <Link to="/perfil"> <div style={{color: '#006BA1E5'}}> Perfil</div>  </Link>
                    <Link to="/endereco"> <div> Endereços</div></Link>
                    <Link to="/senha"> <div> Trocar Senha</div> </Link>
                </div>
                <div className="tab"> 
                    <div className="per-form"> 
                        <div className="nomes"  style={{marginLeft: '1.4em'}}> <h4>Nome de Usuário:</h4> <input ttype="text" name="username" value={nome} onChange={e => SetNome(e.target.value)} /> </div>
                        <div className="nomes" style={{marginLeft: '7em'}}> <h4 >Email:</h4> <input ype="email" id="email" name="email" value={email} onChange={e => SetEmail(e.target.value)}/> </div>
                        <div className="nomes"> <h4> Número de Telefone: </h4> <input  type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/> </div>
                        <div className="genero"  style={{marginLeft: '7.4em'}}> <h4> Sexo: </h4>                         
                            <input type="radio" id="age1" name="age" value="30" fill="red"/>
                            <label value={sexo} onChange={e => SetSexo(e.target.value)}>Masculino</label> 

                            <input type="radio" id="age1" name="age" value="30" fill="red"/>
                            <label>Feminino</label> 

                            <input type="radio" id="age1" name="age" value="30" fill="red"/>
                            <label>Outros</label> 
                        </div>
                        <div className="nascimento"> <h4>Data de Nascimento: </h4> <input type="date" value={nascimento} onChange={e => SetNascimento(e.target.value)}/>  </div>
                    </div>
                </div>
            </div>
            <div className="but"  onClick={() => Alterar(idAlterando)}> Confirmar</div>
            <Rodape />
            </ConteinerPerfils>
    )
    
}