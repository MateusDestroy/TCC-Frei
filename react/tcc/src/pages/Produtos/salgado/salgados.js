import {ConteinerProduto} from '../styled'
import Categorias  from '../../../components/Categorias/categoria'
import Cabecalho from '../../../components/cabecalho/cabecalho'



import Produto from '../boxItem/index'

import Rodape from '../../../components/rodape/rodape'
import Api from '../../../services/api'
import { useEffect } from 'react'
import { useState } from 'react'


const api = new Api();

export default function Salgados (){
    const [produto, SetProduto] = useState([])

    useEffect(() => {
        const listar = async() => {
            const produtosr = await api.ListaProdutosDoces(2); 
            SetProduto(produtosr);
        }
        listar();
    })


    return (
        <ConteinerProduto>
            <Cabecalho/>
              <div className = "Conteinerimg">
               <div className = "Produtos">
                 <Categorias/>
                  <div className = "ListaProdutos">
                      {produto.map(item => <Produto
                        key={item.id}
                        info={item}
                        />) }

               
  
                 
                   </div>
                 </div>
              </div>

              <Rodape />
        </ConteinerProduto>
    )
}