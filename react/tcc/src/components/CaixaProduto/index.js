import { Link } from 'react-router-dom'
import { Conteinerboxproduto } from "./styled";
import Avalicao from '../avaliação/avaliacao'
import Api from '../../services/api'
import { useState, useEffect} from 'react';
import Produtos from '../../pages/Produtos/bebida/bebidas';


const api = new Api;

export default function Box(props) {
   const [produto, SetProduto] = useState([])
   const 
     
   async function ListaProdutos(){
       let r = await api.ListaProdutos(produto)
       SetProduto(r)
   }

   useEffect(() =>{
       ListaProdutos();
   })


    return(
      <Conteinerboxproduto>
            
    <div className = "caixa1">
        <div className = "imagem">  <img src={props.info.imagem} alt=""  /> </div>
        <div className = "Produto"> {props.info.nome} </div>
        <Avalicao/>
        <div className = "Preco">  R$ {props.info.valor},00</div>
        <div className = "botão-compra"> 
        <Link to ={{
            pathname: '/Detalhe',
            state: props.info
        }} >
            <button> Comprar </button> 
        </Link>
        </div>

    </div>
    </Conteinerboxproduto>
    )
}