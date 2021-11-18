import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho/cabecalho'
import Rodape  from '../../components/rodape/rodape'

export default function Carrinho() {

    return ( 
        <div> 
                 <Cabecalho/>
              <div> <Link to="./home"> <img src= "./assets/imagens/icon-voltar-removebg-preview 2.png" alt= ""/>  </Link> </div>
            <img style={{height: '100vh', width: '90vw', backgroundAttachment: 'fixed'}}
                        src={"https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"} alt="Não Encontrado"/>
        <Rodape />

        </div>
    )
}