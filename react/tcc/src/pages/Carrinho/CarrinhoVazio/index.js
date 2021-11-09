import { ContainerCarrinho } from './styled'


import Listras from '../../../components/listras'
import Cabecalho from '../../../components/cabecalho/cabecalho'
import Rodape from '../../../components/rodape/rodape'
import { Link } from 'react-router-dom'

export default function CarrinhoVazio() {

    return (
        <ContainerCarrinho>
            <Cabecalho />
            <div className="titulo" style={{fontSize: '64px', marginLeft: '65px'}}> Meu Carrinho</div>
            <Listras/>
            <div style={{margin: '5px 40px'}}> <Link to="./produtos"> <img src= "./assets/imagens/icon-voltar-removebg-preview 2.png" alt= ""/>  </Link> </div>

            <div className="cc"> 

                <img src="./assets/imagens/vazio.png" alt="" />
            </div>
            <Rodape />
        </ ContainerCarrinho>

        )
    }