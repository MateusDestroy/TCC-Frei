import {ConteinerProduto} from '../styled'
import Categorias  from '../../../components/Categorias/categoria'
import Cabecalho from '../../../components/cabecalho/cabecalho'

import Produto from '../../../components/CaixaProduto'

import Produto from '../boxItem/index'


import Rodape from '../../../components/rodape/rodape'
import { useState, useEffect } from 'react'
import Api from "../../../services/api";

const api = new Api();


export default function Produtos() {

  const [produtos, SetProduto] = useState([])


 
 
  useEffect(() => { 
    const listar = async() => {
      const produtosr = await api.ListaProdutosDoces(4);
      SetProduto(produtosr);
    }
    listar();
  })
    return(

        <ConteinerProduto>
            <Cabecalho/>
            <div className = "Conteinerimg">
            <div className = "Produtos">
             <Categorias/>
             <div className = "ListaProdutos">
               
                    {produtos.map(item => 
                      <Produto 
                      key={item.id}
                      info={item}
                        />
                  )}
                </div>

            
              
              </div>
              </div>

              <Rodape />
        </ConteinerProduto>
    )
    
}