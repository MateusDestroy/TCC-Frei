<<<<<<< HEAD
=======
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
>>>>>>> 82c6332987bc4b4c28a061776cd82453478b60d9
