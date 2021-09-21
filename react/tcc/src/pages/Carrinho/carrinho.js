import { ContainerCarrinho } from './styled'


export default function Carrinho() {

    return (
    <ContainerCarrinho>
        <div className="titulo"> Meu Carrinho</div>
        <div className="tiras">  <div style={{ border: '3px solid #1AABF3', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #006BA1', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #1AABF3', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #006BA1', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #1AABF3', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #006BA1', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #1AABF3', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #006BA1', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #1AABF3', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #006BA1', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #1AABF3', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #006BA1', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #1AABF3', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #006BA1', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #1AABF3', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #006BA1', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #1AABF3', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #006BA1', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #1AABF3', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #006BA1', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #1AABF3', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #006BA1', width: '2em',   borderRadius: '25px'}}> </div>  <div style={{ border: '3px solid #1AABF3', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #006BA1', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #1AABF3', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #006BA1', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #1AABF3', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #006BA1', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #1AABF3', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #006BA1', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #1AABF3', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #006BA1', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #1AABF3', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #006BA1', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #1AABF3', width: '2em',   borderRadius: '25px'}}> </div> <div style={{ border: '3px solid #006BA1', width: '2em',   borderRadius: '25px'}}> </div>  </div>
        <div className="box-tabela"> 
             <thead>
                  <th> </th>
                  <th> Produto </th>
                  <th> Preço </th>
                  <th> Quantidade</th>
                  <th> Total </th>
              </thead>
              <tbody>
                  <tr>
                      <td>dasa</td>
                      <td>baguete de Queijo</td>
                      <td>R$ 3,50</td>
                      <td> 
                           <div className="est-box">
                                <div className="menos"> </div>  <div className="Est-valor"> 1 </div>  <div className="mais"> </div>
                           </div> 
                           <div className="lixeira"> lixo</div>       
                      </td>  
                      <td>R$ 3,50</td>
                     
                  </tr>
            
              </tbody>


        </div>
        <div className="cupom"> 
            <div className="cup-nome" style={{marginTop: '2px'}}> Cupom de Desconto</div>
            <div className="cup-input"> <input /> </div>
            <button style={{marginLeft: '30px', width: '10em', border: '2px solid #B7B7B7', backgroundColor: '#B7B7B7', borderRadius: '20px', outline: 'none'}}>Adicionar</button>
        </div>
        <div className="precos"> 
            <div className="box-preco"> 
                <div className="sb">Subtotal dos Pedidos: </div>
                <div className="pc"> 40,00</div>
            </div>
            <div className="box-preco" style={{marginLeft: '5px'}}> 
                <div className="sb">Cupom de Desconto:</div>
                <div className="pc"> 20,00</div>
            </div>
            <div className="box-preco" style={{marginLeft: '33px'}}> 
                <div className="sb"> Pagamento Total: </div>
                <div className="pc"> 20,00</div>
            </div>
        </div>
        <div className="botoes"> 
            <button> Continuar Comprando </button>
            <button> Realizar pedido </button>
        </div>
    </ ContainerCarrinho>
    )
}