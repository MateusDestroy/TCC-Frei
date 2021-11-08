import { ContainerCarrinho } from './styled'

import Cabecalho from '../../components/cabecalho/cabecalho'
import Rodape from '../../components/rodape/rodape'
import Listras from '../../components/listras'
import { Link } from 'react-router-dom'

export default function Pix() {

    return (
        <ContainerCarrinho>
            <Cabecalho />
            <div className="titulo" style={{fontSize: '64px', marginLeft: '65px'}}>Realizar Pix</div>
           <Listras />
            <div className="cc"> 
                <div className="titles"> Pedido aguardando Pagamento ! </div>
                <div className="text"> 
                     Utiliza o Pix Copia e Cola no aplicativo que você vai realizar o pagamento, com o valor total de: 1.400
                </div>
                <div className="text1"> 
                     Após o Pagamento, clica em Confimrar para Finalizar Pedido. (Caso o pagamento não seja confirmado irá retornar um erro)
                </div>
                <div className="cod"> 
                    <input disabled value="41734628067368373913979174548727"/>
                </div> 
                <div className="gif"> <img src="./assets/imagens/payment.gif" alt="" width="250" /> </div>
                <div className="but"> <Link to="./status">  <button>Confirmar</button> </Link> </div>
            </div>
            <Rodape />
        </ ContainerCarrinho>

        )
    }