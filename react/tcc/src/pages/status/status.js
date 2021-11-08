import {Conteinerstatus} from './styled'
import Cabe from '../../components/cabecalho/cabecalho'
import Roda from '../../components/rodape/rodape' 

import { Link } from "react-router-dom"

export default function status () {

    return (
        <Conteinerstatus>
            <Cabe/>
          
                <div className = "volta">
                    <Link to="./revisao"> <img src= "./assets/imagens/icon-voltar-removebg-preview 2.png" alt= ""/>  </Link>
                </div>
                <div className= "tet1">
                    Previsão de Entrega
                </div>
                <div className= "tet2">
                    concluído ás 08:15
                </div>
                <div className= "previsaó">
                    <div className= "previsao1">
                       
                    </div>
                    <div className= "previsao2">
                   
                    </div>
                </div>    
                <div className=  "ok">
                    Pedido Completo !
                </div>
                <div className= "enderco">
                    <div className = "en">
                    Entrega em
                    </div>
                    <div className = "rua">
                        R. Rio do Vae, 700,
                    </div>
                    <div className = "bairro">
                        Vila Mariana, - São Paulo, São Paulo
                    </div>
                    </div>

                    <div className= "borda">
                        <div class= "part1-C3">
                            <div className= "pedido">
                            Detalhes do Pedido
                            </div> 
                            
                            <div className ="numero">
                            Nº do Pedido: 202111051841
            
                            </div> 
                        </div>
                        <div className= "detalhesdoproduto">
                            <div className= "imgproduto">
                            <img src="./assets/imagens/baguete-queijo e presunto 14.png" alt=""/>
                            </div> 
                            <div className="qtdnm" >
                                <div className="nm">
                                    Baguete de queijo 
                                    </div>
                                <div className="qtd">
                                    x1
                                </div>
                                </div>
                            <div className="vlprd">
                                R$ 3,00
                                </div> 
                            </div>
                            <div className="final">
                                <div className="sub">
                                    Subtotal dos produtos  
                                </div>
                                <div className="valor">
                                    R$ 3,00
                                </div>
                            </div> 

                            <div className="final">
                                <div className="sub">
                                   Envio 
                                </div>
                                <div className="valor">
                                    R$ 0,00
                                </div>
                            </div> 

                            <div className="final">
                                <div className="sub">
                                    Total do pedido  
                                </div>
                                <div className="red">
                                    R$ 3,50
                                </div>
                            </div> 

                            <div className="final">
                                <div className="sub">
                                   Método do pedido
                                </div>
                                <div className="valor">
                                   dinheiro
                                </div>
                            </div> 
                            
                        </div>
                       
                    
            <Roda/>
        </Conteinerstatus>
    )
}