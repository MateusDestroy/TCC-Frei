import { ConteinerInicial } from './styled'

import Cabecalho from '../../components/cabecalho/cabecalho'
import Rodape  from '../../components/rodape/rodape'
import { Link } from 'react-router-dom'




export default function Inicial () {

    return (

        <ConteinerInicial> 
         <Cabecalho/>
        <div className= 'faixa2'>

            <div className = "ikkdfsksk">
            <div className= 'favoritos'>
                <div className= 'titulo01'>
                    Favoritos da casa
                </div>
                <div className= 'descricao01'>
                    Categoria mais pedidas e vendidas
                </div>

                <div className= 'subtitulosimg'>
                    <div className= 'pães'>
                        Pães
                    </div>
                    <div className='doces'>
                        Doces
                    </div>
                    <div className= 'bebidas'>
                        Bebidas
                </div>  
                </div>

                <div className='imgsub'>
                <div className = 'imgpaes'>
                    <Link to = "/Salgados">
                    <img src="./assets/imagens/image 2 (1) 1.png" width="340" height="255"  alt=""/>
                    </Link>
                </div>  
                <div className = 'imgdoces'>
                    <Link to = "/Doces">
                    <img src="./assets/imagens/Bolo-de-Chocolate 1 (1).png" width="340" height="255" alt= ""/>
                    </Link>
                </div>
                <div className = 'imgbebidas'>
                <Link to = "/Bebidas">
                    <img src="./assets/imagens/Laranja 1 (1).png" width="340" height="255" alt=""/>
                </Link>
                </div>
                </div>
                </div>
                </div>
            
                </div>
                <Rodape />
            </ConteinerInicial>
    )
}