import { ContainerRevisao } from './styled'

import Tiras from '../../components/listras/index'
import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho/cabecalho'
import Rodape from '../../components/rodape/rodape'
import Pagamento from '../../components/pagamento'
import { useState, useEffect } from 'react'
import BoxItem from './BoxRevisao'
import Cookie from 'js-cookie'




export default function Revisao(props) {
    const [Mostrar, setMostrar] = useState(false);
    const [produtos, setProdutos] = useState([]);
    




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
 

    async function listar() {
        setMostrar(true)  
        onclick="select"
    }

    async function remover(){
        setMostrar(false)
    }


    return ( 

       

        <ContainerRevisao>
            <Cabecalho />
            <h1 style={{marginLeft: '70px'}}>  Finalização da Compra </h1>
            <Tiras/>
            <div className="but-esco"> 
            <Link to="/entrega">  <button className="entrega"> <div><img src="./assets/imagens/entregador-montando-a-ilustracao-de-scooter-vermelho_9845-14-removebg-preview 8.png" alt="" /></div> <div> Entrega</div>  <div>10-60 Min</div> </button> </Link>
                <button className="entrega" style={{backgroundColor: '#006BA1E5', border: '#006BA1E5', color: 'white', marginLeft: '40px'}}>  <div><img src="./assets/imagens/pointer.png" alt="" /></div>   <div> Retirada </div>  <div style={{color: '#FF0088'}}> 2-20 Min</div> </button> 
            </div>
            <div className="end-info"> 
                <div className="endereco"> 
                    <h2> Endereço de Retirada </h2>
                    <div style={{textAlign: 'left'}}> 463 Av. Coronel Octaviano de Freitas Costa,   Veleiros <br></br>Socorro, São Paulo - SP, 04773-000 </div>
                </div>
                <div className="horario" style={{textAlign: 'center'}}> 
                    <h2>  Horário de Retirada </h2>
                    <div> De Segunda à Sexta-Feira <br></br> 08:00 às 16:30</div>
                </div>
            </div>
            <div className="tabela"> 
            <h1> Produtos Pedidos</h1>
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
                <div className="pix"  type="radio" style={{marginLeft: '1em', alignItems: 'center'}}> <img src="./assets/imagens/logo-pix-icone-512 10.png" alt="" width="30%"/> <div style={{marginLeft: '.8em'}}> PIX </div> </div>
                <div className="din"  onClick={remover} style={{marginLeft: '3em', alignItems: 'center'}}> <img src="./assets/imagens/dinheiro.png" alt="" width="58%"/> <div> Dinheiro </div> </div>
                <div className="car" style={{marginLeft: '3em'}} onClick={listar}> <img src="./assets/imagens/kisspng-e-commerce-payment-system-credit-card-debit-card-5bf9cb52d627b6 2.svg" alt=""  /> <div>   Cartão de Crédito</div> </div>
            </div> 
            <div className="bandeiras">
                     
                        {Mostrar &&
                            <Pagamento onClick={listar} />
                        }
                        
                   

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
                     <div className="sb"> Pagamento Total: </div>
                     <div className="pc"> 20,00</div>
                </div>
            </div>
                
            <div className="but" >
            <Link to="./Pagamento"> <button className="ff"> Fazer Pedidos</button> </Link>
            </div>
        <Rodape />
        </ContainerRevisao>

)
}