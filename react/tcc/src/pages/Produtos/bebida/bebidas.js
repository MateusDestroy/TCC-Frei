import {ConteinerProduto} from '../styled'
import Categorias  from '../../../components/Categorias/categoria'
import Cabecalho from '../../../components/cabecalho/cabecalho'
import Produto from '../../../components/CaixaProduto'

import Rodape from '../../../components/rodape/rodape'
import { useState, useEffect } from 'react'



export default function Produtos() {

  const [produtos, SetProduto] = useState([])


 
 
  useEffect(() => {
    Listar();
},   [])
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


                {/*
                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/Pao-doce-coco-creme-Baixa-5 3.png" alt=""  /> </div>
                 <div className = "Produto"> Pão doce de creme c/ coco </div>
                 <Avalicao/>
                 <div className = "Preco"> Valor: 2,50 R$ </div>
                 <div className = "botão-compra"> <button> Comprar </button> </div>
                </div>



                 
                  <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/sonho de creme.png" alt=""  /> </div>
                 <div className = "Produto"> Sonho de creme </div>
                 <Avalicao/> 
                 -–>
                 <div className = "Preco"> Valor: 3,50 R$ </div>
                 <div className = "botão-compra"> <button> Comprar </button> </div>
                </div> 


                
                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/Bolo de Fubá.png" alt=""  /> </div>
                 <div className = "Produto"> Bolo de fubá (pedaço) </div>
                 <Avalicao/>
                 <div className = "Preco"> Valor: 2,00 R$ </div>
                 <div className = "botão-compra"> <button> Comprar </button> </div>
                </div>

                

                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/bolo com cobertura.png" alt=""  /> </div>
                 <div className = "Produto"> Bolo c/cobertura (pedaço) </div>
                 <Avalicao/>
                 <div className = "Preco"> Valor: 3,50 R$ </div>
                 <div className = "botão-compra"> <button> Comprar </button> </div>
                </div>
                

                 
                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/baguete.png" alt=""  /> </div>
                 <div className = "Produto"> Baguete </div>
                 <Avalicao/>
                 <div className = "Preco">Valor: 4,00 R$ </div>
                 <div className = "botão-compra"> <button> Comprar </button> </div>
                </div>

                
                 
                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/baguete_folhada.jpg" alt=""  /> </div>
                 <div className = "Produto"> Baguete Folhada</div>
                 <Avalicao/>
                 <div className = "Preco">Valor: 4,00 R$ </div>
                 <div className = "botão-compra"> <button> Comprar </button> </div>
                </div>

                 
                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/pao-de-queijo-mineiro 1.png" alt=""  /> </div>
                 <div className = "Produto"> Pão de queijo </div>
                 <Avalicao/>
                 <div className = "Preco">Valor: 3,00 R$ </div>
                 <div className = "botão-compra"> <button> Comprar </button> </div>
                </div>

                 
                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/Suco de Limão 1.png" alt=""  /> </div>
                 <div className = "Produto"> Suco de Limão </div>
                 <Avalicao/>
                 <div className = "Preco">Valor: 2,50 R$ </div>
                 <div className = "botão-compra"> <button> Comprar </button> </div>
                </div>

                 
                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/Café 2.png" alt=""  /> </div>
                 <div className = "Produto"> Café </div>
                 <Avalicao/>
                 <div className = "Preco">Valor: 1,50 R$ </div>
                 <div className = "botão-compra"> <button> Comprar </button> </div>
                </div>


                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/Café 2.png" alt=""  /> </div>
                 <div className = "Produto"> Café </div>
                 <Avalicao/>
                 <div className = "Preco">Valor: 1,50 R$ </div>
                 <div className = "botão-compra"> <button> Comprar </button> </div>
                </div>


                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/Café 2.png" alt=""  /> </div>
                 <div className = "Produto"> Café </div>
                 <Avalicao/>
                 <div className = "Preco">Valor: 1,50 R$ </div>
                 <div className = "botão-compra"> <button> Comprar </button> </div>
                </div>

                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/Café 2.png" alt=""  /> </div>
                 <div className = "Produto"> Café </div>
                 <Avalicao/>
                 <div className = "Preco">Valor: 1,50 R$ </div>
                 <div className = "botão-compra"> <button> Comprar </button> </div>
                </div>


                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/Café 2.png" alt=""  /> </div>
                 <div className = "Produto"> Café </div>
                 <Avalicao/>
                 <div className = "Preco">Valor: 1,50 R$ </div>
                 <div className = "botão-compra"> <button> Comprar </button> </div>
                </div>


                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/Café 2.png" alt=""  /> </div>
                 <div className = "Produto"> Café </div>
                 <Avalicao/>
                 <div className = "Preco">Valor: 1,50 R$ </div>
                 <div className = "botão-compra"> <button> Comprar </button> </div>
                </div> */}
                </div>

            
              
              </div>
              </div>

              <Rodape />
        </ConteinerProduto>
    )
    
}