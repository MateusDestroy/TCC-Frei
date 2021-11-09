import Avaliação from "../avaliação/avaliacao"
import { Conteinerboxproduto } from "./styled"



export default function CaixaPRoduto() {
    return ( 
        <Conteinerboxproduto>
        <div className = "caixa1">
           <div className = "imagem"> <img src="./assets/imagens/sonho.png" alt=""  /> </div>
             <div className = "Produto"> Sonho creme </div>
               <Avaliação/>
             <div className = "Preco"> Valor: 3,50 R$ </div>
             <div className = "botão-compra"> <button> Compra </button> </div>
          </div>
          </Conteinerboxproduto>
    )
    
}