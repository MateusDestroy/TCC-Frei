import { ConteinerCabecalho, Tristeza } from "./styled"
import Pesquisa from "./Pesquisa/styled"

import { Link } from "react-router-dom"
import { useState } from "react"

import { useHistory } from "react-router"


import Cookie from "js-cookie"

export default function Cabecalho() {

    const [Pes, setPes] = useState(false);
    
    const paginas = useHistory();


async function a() {
    if(Pes === true) {
        setPes(false)
    }
    else {
        setPes(true)
    }
}

    return(
        <ConteinerCabecalho>
            <div className = "ConteinerCabecalho">
                <div className = "conteudo">
                    <div className = "sobre"> <Link to = "/sobre"> SOBRE NÓS </Link> </div>

                    <div className = "inicial"> <Link to = "/home"> HOME </Link> </div>

                    <div className = "menu"> <Link to = "/produtos">  MENU </Link></div> 

                </div>
    

                 
                 <div className = "entrada">
                    <Pesquisa />
                    <div className = "imagem-lupa" >  <img src= "./assets/imagens/lupa1.svg" alt ="" width="100%" onClick={a}/> </div>
                    <div class="barra"></div>
                    <Tristeza>  
                       <Link to = '/Login'> <img src= "./assets/imagens/login.svg" alt ="" />  </Link>
                        <div className="ffs"> 
                            <Link to = "/perfil"> <div className="names"> Minha Conta </div> </Link>
                            <div className="bord"> </div>
                            <Link to = "./Compras"> <div className="names"> Meus Pedidos</div> </Link>
                            <div className="bord"> </div>
                             <div className="names"  onClick={ () => {
                                    if( Cookie !== undefined ){
                                        Cookie.remove('usuario-logado')
                                        paginas.push('/')
                                    }
                                    paginas.push('/')
                                        
                            }
                        }> { Cookie.get('usuario-logado') === undefined ? 'Entrar'  : 'Sair' } </div> 
                            <div className="bord"> </div>
                        </div>            
                    </Tristeza>
                    <div class="barra1"> </div>
                    <div className = "imagem-carrinho"> <Link to = "/Carrinho"> <img src= "./assets/imagens/mbricartadd_99553.svg" alt ="" /> </Link> </div>
                 </div>
  
                </div> 
        
        </ConteinerCabecalho>
    )
    
}