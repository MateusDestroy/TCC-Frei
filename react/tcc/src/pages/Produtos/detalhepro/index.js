
import { ConteinerProdutos } from './styled'
import ContadorProduto from './contadorProduto/styled'
import Categorias  from '../../../components/Categorias/categoria'
import Cabecalho from '../../../components/cabecalho/cabecalho'
import {  useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'
import Rodape from '../../../components/rodape/rodape'
import { useState } from 'react'



export default function DetalhesProdutos(props) {
  const [produto, setProduto] = useState(props.location.state);  


  const navigation = useHistory();
  


  function comprar() {
    // Lê o Array de Produtos do Carrinho do Cookie.
    // Se o Cookie estiver vazio, volta um Array vazio []
    // Se o Cookie não estiver vazio, converte o Cookie em Array pelo JSON.parse()
    let carrinho = Cookie.get('carrinho');
    carrinho = carrinho !== undefined 
                ? JSON.parse(carrinho) 
                : [];

    
    // Verifica se o produto em questão já está no carrinho pelo Id e pela função some()
    // Se o produto não existir, adiciona o produto no carrinho copiando todos os campos do produto
    // e adicionando o campo novo qtd com valor 1
    if (carrinho.some(item => item.id === produto.id) === false)
        carrinho.push({...produto, qtd: 1 });
 
    
    // Atualiza o Cookie com o novo produto Comprado
    Cookie.set('carrinho', JSON.stringify(carrinho));
    
    
    // Abre a página /carrinho
    navigation.push('/carrinho');
    setProduto();
  }
 
  



    return(

        <ConteinerProdutos>
            <Cabecalho/>
            <div className = "Conteinerimg">

            <div className = "Detalhes">
              <Categorias/>
              

               <div className = "DetalhesProdutos">
              <h2>  {produto.nome} </h2>

                <div className = "Produto" >
                <div className = "Imagem-produto"><img src= {produto.img_produto}  alt=""  /> </div>  

                  <div className = "informaçõesproduto">
                        <div className = "informações">
                         <div className = "valor-Produto"> R$: {produto.vl_valor}   </div>
                          <ContadorProduto />
                         <button className = "adicionarCarrinho"  onClick={comprar}>Adicionar ao Carrinho </button>
                       </div>

                       <div className = "conteinerDescricao">
                         <h3> DESCRIÇÃO DO PRODUTO:  </h3>
                         <div className = "Descrição-produto"> {produto.ds_descricao} </div>
                       </div>
                       
                   </div>


                   </div>
                   












                </div>
               </div>
              </div>
            <Rodape />
        </ConteinerProdutos>
    )
    
}