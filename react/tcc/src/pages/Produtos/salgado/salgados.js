import {ConteinerProduto} from '../styled'
import Categorias  from '../../../components/Categorias/categoria'
import Cabecalho from '../../../components/cabecalho/cabecalho'
import Avalicao from '../../../components/avaliação/avaliacao'
import BotaoCompra from '../../../components/buttoncompra/index'




import Rodape from '../../../components/rodape/rodape'


export default function Salgados (){
    return (
        <ConteinerProduto>
            <Cabecalho/>
            <div className = "Conteinerimg">
            <div className = "Produtos">
             <Categorias/>
             <div className = "ListaProdutos">
               
  
                 <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/rocambole de chocolate.png" alt=""  /> </div>
                 <div className = "Produto"> Bolinho </div>
                 <Avalicao/>
                 <div className = "Preco"> Valor: 2,50 R$ </div>
                 <BotaoCompra/>
                </div>



                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/Pao-doce-coco-creme-Baixa-5 3.png" alt=""  /> </div>
                 <div className = "Produto"> Pão doce de coco </div>
                 <Avalicao/>
                 <div className = "Preco"> Valor: 3,50 R$ </div>
                 <div className = "botão-compra"> <button> Compra </button> </div>
                </div>



                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/sonho.png" alt=""  /> </div>
                 <div className = "Produto"> Sonho creme </div>
                 <Avalicao/>
                 <div className = "Preco"> Valor: 3,50 R$ </div>
                 <div className = "botão-compra"> <button> Compra </button> </div>
                </div>


                
                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/Bolo de Fubá.png" alt=""  /> </div>
                 <div className = "Produto"> Bolo simples  </div>
                 <Avalicao/>
                 <div className = "Preco"> Valor: 2,00 R$ </div>
                 <div className = "botão-compra"> <button> Compra </button> </div>
                </div>

                

                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/bolo com cobertura.png" alt=""  /> </div>
                 <div className = "Produto"> Bolo c/cobertura </div>
                 <Avalicao/>
                 <div className = "Preco"> Valor: 3,50 R$ </div>
                 <div className = "botão-compra"> <button> Compra </button> </div>
                </div>
                

                 
                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/baguete.png" alt=""  /> </div>
                 <div className = "Produto"> Baguete </div>
                 <Avalicao/>
                 <div className = "Preco">Valor: 4,00 R$ </div>
                 <div className = "botão-compra"> <button> Compra </button> </div>
                </div>

                
                 
                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/baguete_folhada.jpg" alt=""  /> </div>
                 <div className = "Produto"> Baguete Folhada</div>
                 <Avalicao/>
                 <div className = "Preco">Valor: 4,00 R$ </div>
                 <div className = "botão-compra"> <button> Compra </button> </div>
                </div>

                 
                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/Pao de queijo.png" alt=""  /> </div>
                 <div className = "Produto"> Pão de queijo </div>
                 <Avalicao/>
                 <div className = "Preco">Valor: 3,00 R$ </div>
                 <div className = "botão-compra"> <button> Compra </button> </div>
                </div>

                 
                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/Suco de Limão 1.png" alt=""  /> </div>
                 <div className = "Produto"> Suco de Limão </div>
                 <Avalicao/>
                 <div className = "Preco">Valor: 2,50 R$ </div>
                 <div className = "botão-compra"> <button> Compra </button> </div>
                </div>

                 
                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/Café 2.png" alt=""  /> </div>
                 <div className = "Produto"> Café </div>
                 <Avalicao/>
                 <div className = "Preco">Valor: 1,50 R$ </div>
                 <div className = "botão-compra"> <button> Compra </button> </div>
                </div>
                </div>

              
              </div>
              </div>

              <Rodape />
        </ConteinerProduto>
    )
}