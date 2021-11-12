import { ContainerRevisao } from './styled'
import Tiras from '../../components/listras/index'
import { Link } from 'react-router-dom'

import Cabecalho from '../../components/cabecalho/cabecalho'
import Rodape from '../../components/rodape/rodape'
import { useState } from 'react'
import Model from '../../components/modal'

export default function Carrinho() {
    
    const [Exibir, setExibir] = useState(false)

    return ( 
        <ContainerRevisao>
            <Model show={Exibir} />
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
                <button onClick={() => setExibir(true)}> <img src="./assets/imagens/plus_icon-icons.com_70890.svg" alt="" /> <h3>Novo Endereço</h3></button> 
            </div>
               <div className="en-entrega">
               <form>
                    <div className="en-input">
                        <input type="radio" id="age1" name="age" value="30" />
                        <label>João Pedro Silva dos Santos   (+55) 1199999-9999 - R Rio do Vae, 700, Vila Mariana, São Paulo, São Paulo, 04018002</label> 
                    </div>
                    <div className="en-input">
                        <input type="radio" id="age1" name="age" value="30" fill="red"/>
                        <label>João Pedro Silva dos Santos   (+55) 1199999-9999 - R Rio do Vae, 700, Vila Mariana, São Paulo, São Paulo, 04018002</label> 
                    </div>
                </form>
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
              <tbody>
                  <tr>
                      <td style={{width: '3%'}}> <img src="./assets/imagens/bolinho.png" alt="" width="90%" /> </td>
                      <td>baguete de Queijo</td>
                      <td>R$ 3,50</td>
                      <td>3</td>  
                      <td>R$ 3,50</td>
                  </tr>
              </tbody>
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