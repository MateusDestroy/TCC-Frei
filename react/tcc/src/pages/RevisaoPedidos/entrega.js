import { ContainerRevisao } from './styled'
import Tiras from '../../components/listras/index'
import { Link } from 'react-router-dom'

import Cabecalho from '../../components/cabecalho/cabecalho'
import Rodape from '../../components/rodape/rodape'
import { useState } from 'react'
import Model from '../../components/modal'
import Api from '../../services/api'
import { useEffect } from 'react'
import BoxItem from './BoxRevisao'
import Cookie from 'js-cookie'



const api = new Api();


export default function Carrinho(props) {



     




    const [endereco, SetEndereco] = useState([])   
    const [exibirModal, setExibirModal] = useState({show: false});
    const [produtos, setProdutos] = useState([]);
 
    
    
    function lerUsuarioQuelogou(navigation) {
     
     
        let logado = Cookie.get('usuario-logado');
    
        if (logado === undefined) {
            alert('Você deve estar logado para acessar essa página');
            navigation.push('/entrega')
    
        } else {
            let usuarioLogado = JSON.parse(logado);
            return usuarioLogado;
        }
    }

    useEffect(lerUsuarioQuelogou);

    

useEffect(carregarCarrinho, []);



    function carregarCarrinho() {
    // Lê o Array de Produtos do Carrinho do Cookie.
    // Se o Cookie estiver vazio, volta um Array vazio []
    // Se o Cookie não estiver vazio, converte o Cookie em Array pelo JSON.parse()
    let carrinho = Cookie.get('carrinho');
    carrinho = carrinho !== undefined 
                ? JSON.parse(carrinho) 
                : [];

            
    // Atualiza a variável de Estado com o Conteúdo do Cookie
    setProdutos(carrinho);
    }
    useEffect(() => { 
        const listar = async() => {
          const produtosr = await api.ListarEndereco(82);
          SetEndereco(produtosr);
        }
        listar();
      })


    return ( 
        <ContainerRevisao>
            <Model options={exibirModal}/>

            <Cabecalho />
            <h1 style={{marginLeft: '70px'}}>  Finalização da Compra </h1>
            <Tiras/>
            <div className="but-esco"> 
                <button className="entrega" style={{backgroundColor: '#006BA1E5', border: '#006BA1E5',color: 'white', marginRight: '40px'}}> <div><img src="./assets/imagens/entregador-montando-a-ilustracao-de-scooter-vermelho_9845-14-removebg-preview 8.png" alt="" /></div> <div> Entrega</div>  <div style={{color: '#FF0088'}}>10-60 Min</div> </button>
                <Link to="/revisao">  <button className="entrega" >  <div><img src="./assets/imagens/pointer.png" alt="" /></div>   <div> Retirada </div>  <div> 2-20 Min</div> </button> </Link>
            </div>
            <div className="info"> 
            <div className="en-cabe">   
                <h2> Endereço de Entrega </h2>
                <button onClick={() => setExibirModal({show: true})}> <img src="./assets/imagens/plus_icon-icons.com_70890.svg" alt="" /> <h3>Novo Endereço</h3></button> 
            </div>
               <div className="en-entrega">
               

                <form>
                {endereco.map((item, i) =>
                        <div className="en-input">
                            <input type="radio" id="age1" name="age" value="30" />
                            <label> {item.nm_nome}   (+55) 1199999-9999 - {item.ds_endereco}, {item.nr_numero}, {item.ds_cep}, {item.ds_cidade}</label> 
                        </div>
                     )} 
                    
                    </form>
                
                </div>
            </div>
            <div className="tabela"> 
            <h1> Produtos Pedidos </h1>
            <thead>
                  <th>   </th>
                  <th> Produto </th>
                  <th> Preço unitário </th>
                  <th> Quantidade </th>
                  <th> Subtotal de itens</th>
              </thead>
              {produtos.map(item => 
                    <BoxItem key={item.id} 
                        info={item} 
                       
                        />
                )}
            </div>
            <h1 style={{marginLeft: '3em'}}>Método de Pagamento</h1>    
            <div className="meto-paga">
                <div className="pix" style={{marginLeft: '1em', alignItems: 'center'}}> <img src="./assets/imagens/logo-pix-icone-512 10.png" alt="" width="30%"/> <div style={{marginLeft: '.8em'}}> PIX </div> </div>
                <div className="din" style={{marginLeft: '3em', alignItems: 'center'}}> <img src="./assets/imagens/dinheiro.png" alt="" width="58%"/> <div> Dinheiro </div> </div>
                <div className="car" style={{marginLeft: '3em'}}> <img src="./assets/imagens/kisspng-e-commerce-payment-system-credit-card-debit-card-5bf9cb52d627b6 2.svg" alt=""  /> <div>   Cartão de Crédito</div> </div>
            </div> 
            <div className="precos"> 
                <div className="box-preco"> 
                     <div className="sb">Subtotal dos Pedidos: </div>
                     <div className="pc"> 40,00</div>
                </div>
                <div className="box-preco"> 
                     <div className="sb">Cupom de Desconto:</div>
                     <div className="pc"> 20,00</div>
                </div>
                <div className="box-preco"> 
                     <div className="sb"> Total do Envio: </div>
                     <div className="pc"> 20,00</div>
                </div>
                <div className="box-preco"> 
                     <div className="sb"> Pagamento Total: </div>
                     <div className="pc"> 20,00</div>
                </div>
            </div>
            <div className="but">
               <Link to="./Pagamento"> <button className="ff"> Fazer Pedidos</button> </Link>
            </div>
        <Rodape />
        </ContainerRevisao>
        )
}