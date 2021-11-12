
import { Link } from 'react-router-dom'
import Avalicao from '../../../components/avaliação/avaliacao'





export default function Box(props) {
    return(
            
    <div className = "caixa1">
        <div className = "imagem">  <img src={props.info.img_produto} alt=""  /> </div>
        <div className = "Produto"> {props.info.nm_produto} </div>
        <Avalicao/>
        <div className = "Preco">  R$ {props.info.vl_valor}</div>
        <div className = "botão-compra"> 
        <Link to ={{
            pathname: '/Detalhe',
            state: props.info
        }} >
            <button> Comprar </button> 
        </Link>
        </div>

    </div>
    )
}

