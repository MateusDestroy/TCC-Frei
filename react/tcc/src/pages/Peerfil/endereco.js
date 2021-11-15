import {ConteinerPerfils} from './styled'

import Tiras from '../../components/listras/index'
import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho/cabecalho'
import Model from '../../components/modal'
import Rodape from '../../components/rodape/rodape'

import Api from '../../services/api'
import { useEffect, useState } from 'react'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const api = new Api();


export default function Perfil() {
    const [endereco, SetEndereco] = useState([]) 
    const [exibirModal, setExibirModal] = useState({show: false});

    
    async function remover(id) {
confirmAlert({
    title: 'Remoção de Endereço',
    message: 'Tem Certeza que Deseja remover o Endereço ?',
    buttons: [
      {
        label: 'Sim',
        onClick: async () => {   let r = await api.DeletarEndereco(id);;
            if(r.erro)
            toast.error(r.erro);
            else {
            toast.dark('Endereço removido, Com Sucesso!');
         }
        }
      


      },
      {
        label: 'Não',
        onClick: () => toast.dark('Endereço não Removido !')
      }
    ]
  })

    }

  
    

    useEffect(() => { 
        const listar = async() => {
          const produtosr = await api.ListarEnderecoPerfil(3);
          SetEndereco(produtosr);
        }
        listar();
      })

    return(

        <ConteinerPerfils>
                      <Model options={exibirModal}/>
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
                {endereco.map((item, i) =>
                        <div className="en-endereco">
                        <div className="en-box"> 
                                <div className="no"> 
                                    <div style={{marginRight: '20px'}}>Nome Completo: </div> <div> {item.id_cliente_infoa_sti_cliente.nm_nome}   {item.id_cliente_infoa_sti_cliente.nm_nome}</div> 
                                </div>
                                <div className="bot"> 
                                <div onClick={() => setExibirModal({show: true})}> Adicionar </div> <div onClick={() => remover(item.id_endereco)}> Apagar  </div> 
                                </div>  
                        </div>
                        <div className="tel"> 
                            <div style={{marginRight: '20px', paddingLeft: '3.7em'}}>Telefone: </div> <div> {item.id_cliente_infoa_sti_cliente.ds_telefone} </div> 
                        </div>
                        <div className="end"> 
                            <div style={{marginRight: '20px', paddingLeft: '3.7em'}}>Endereço: </div> <div>{item.ds_endereco}</div> 
                        </div>
                        </div>
                    )} 

                    </div>
                
            </div>
         <Rodape/>
        </ConteinerPerfils>
    )
    
}