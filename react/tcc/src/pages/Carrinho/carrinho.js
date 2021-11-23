import { ContainerCarrinho } from './styled'
import Tiras from '../../components/listras/index'
import Cabecalho from '../../components/cabecalho/cabecalho'
import Rodape  from '../../components/rodape/rodape'
import CarrinhoItem from './/boxItem/index'
import Cookie from 'js-cookie'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { useHistory } from 'react-router'
export default function Carrinho(props ) {

    const navegation = useHistory()
    const [produtos, setProdutos] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(
        function carregarCarrinho() {
            let carrinho = Cookie.get('carrinho');
            carrinho = carrinho != null
                                ? JSON.parse(carrinho)
                                : [];
    
            setProdutos(carrinho);
        
            if (carrinho.length === 0)
            navegation.push('/carrinhoVazio')
    
        }, [navegation]
     );


    function atualizarTotal() {
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho != null
                            ? JSON.parse(carrinho)
                            : [];

                            let t = carrinho.reduce((prev,curr) => prev + curr.vl_valor * curr.qtd, 0);
                            t = Number(t.toFixed(2)); 
        setTotal(t)
    }

    function carregarCarrinho() {
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho != null
                            ? JSON.parse(carrinho)
                            : [];

        atualizarTotal();
        setProdutos(carrinho);
    
        if (carrinho.length === 0)
        navegation.push('/carrinhoVazio')

    }




    
function removerProduto(id_produto) {
    // Buscar todos os Itens do Carrinho DIFERENTES do produto que está sendo removido 
    let carrinho = produtos.filter(item => item.id_produto !== id_produto);
    
    // Atualiza o Cookie
    Cookie.set('carrinho', JSON.stringify(carrinho));

    atualizarTotal();
    // Atualiza a variável de estado
    carregarCarrinho()
    }

  
    
    
      function alterarProduto(id, qtd) {
        // Busca o Produto em questão no Carrinho e atualiza o campo de 'qtd'
        let produtoAlterado = produtos.filter(item => item.id === id)[0];
        produtoAlterado.qtd = qtd;
    
        // Atualiza o Cookie
        Cookie.set('carrinho', JSON.stringify(produtos));


        atualizarTotal();
     }

 
    
     
    return (
    <ContainerCarrinho>
        <Cabecalho />
        <div className="titulo" style={{fontSize: '64px', marginLeft: '65px'}}> Meu Carrinho</div>
        <Tiras/>
        <div className="box-tabela"> 
        
             <thead>
                <th> </th>
                <th> Produto </th>
                <th> Preço </th>
                <th className="f"> Quantidade </th>
                <th> Total </th>
             </thead>
                {produtos.map(item => 
                    <CarrinhoItem key={item.id} 
                        info={item} 
                        onUpdate={alterarProduto}
                        onRemove={removerProduto}
                        />
                )}

        </div>
        <div className="cupom"> 
            <div className="cup-nome" style={{marginTop: '2px'}}> Cupom de Desconto</div>
            <div className="cup-input"> <input /> </div>
            <button style={{marginLeft: '30px', width: '10em', border: '2px solid #B7B7B7', backgroundColor: '#B7B7B7', borderRadius: '20px', outline: 'none'}}>Adicionar</button>
        </div>
        <div className="precos"> 
            <div className="box-preco"> 
                <div className="sb">Subtotal dos pedidos: </div>
                <div className="pc"> {total} </div>
            </div>
            <div className="box-preco"> 
                <div className="sb">Cupom de desconto:</div>
                <div className="pc"> 20,00</div>
            </div>
            <div className="box-preco"> 
                <div className="sb"> Pagamento total: </div>
                <div className="pc"> 20,00</div>
            </div>
        </div>
        <div className="botoes"> 
            <Link to="./Produtos"> <button> Continuar comprando </button> </Link> 
            <Link to ={{
            pathname: '/revisao',
            state: props.info
        }} > <button>  Realizar pedido   </button> </Link> 
        </div>
        <div className="as">
                <Rodape />
            </div>
                </ ContainerCarrinho>
    )
}