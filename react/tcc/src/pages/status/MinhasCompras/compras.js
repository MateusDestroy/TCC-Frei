import { Conteinercompras } from './styled'
import Chvecalho from '../../../components/cabecalho/cabecalho'
import Rodape from '../../../components/rodape/rodape'




export default function MinhasCompras (){
   
    return (
        <Conteinercompras>
            <Chvecalho/>



                <div className= "Minhas">
                    Minhas Compras
                </div>

                <div className= "etapas">
                    <div className= "etapa1">
                        Todos
                    </div>
                    
                    <div className="b"></div>

                    <div className= "inupt-02">
                    <input type="text" class="custom-file-input" name="search" placeholder="Pesquisar Codígo do produto ou nome do produto" />
                    </div>

                </div>
                <div className="borda222">
                    <div className="stausdacompra">
                        <div className="status-retirada">
                            Entrega -
                        </div>
                        <div className="status-concluifdo">
                            Concluído
                        </div>
                    </div>


                    <div className="descricao-produto">
                        <div className= "imgprodutro">
                            <img src="./assets/imagens/baguete-queijo e presunto 14.png" height="79" alt=""/>
                        </div>
                        <div className="pRoD">
                            <div className="nm-produto">
                                Baguete de Queijo
                            </div>
                            <div className= "qtd-produto">
                                x1
                            </div>
                        </div>

                        <div className= "PrEcO">
                            <div className= "Pre">
                                Preço Unitario
                            </div>
                            <div className="vl">
                                R$ 3,50
                            </div>
                        </div>

                        <div className= "SuBT">
                            <div className="itenms">
                                Subtotal de itens
                            </div>
                            <div classNam="valor">
                                R$ 3,50
                            </div>
                        </div>
                    </div>

                    <div className="pronto0sium">
                        <div className="imgstatus">
                            <img src = './assets/imagens/Ellipse 45.svg' alt=""/>
                        </div>
                        <div className= "Statussim">
                        Aguardando a Confirmação !
                        </div>
                        <div className="ccc">
                        <div className="total">
                            Total de Pagamento:
                        </div>
                        <div className= "vaLor">
                            R$ 3,50
                        </div>
                        </div>
                    </div>

                    <div className = "numerope">
                        <div className="nprod">
                            Nº do Pedido
                        </div>
                        <div className= "numeropedido">
                            2527
                        </div>
                        </div>
                        <div className="butons">
                            <button> Vizualizar </button>
                    </div>
                </div>

                <div className="borda222">
                    <div className="stausdacompra">
                        <div className="status-retirada">
                            Retirada -
                        </div>
                        <div className="status-concluifdo">
                            Concluído
                        </div>
                    </div>


                    <div className="descricao-produto">
                        <div className= "imgprodutro">
                            <img src="./assets/imagens/baguete-queijo e presunto 14.png" alt=""/>
                        </div>
                        <div className="pRoD">
                            <div className="nm-produto">
                                Baguete de Queijo
                            </div>
                            <div className= "qtd-produto">
                                x1
                            </div>
                        </div>

                        <div className= "PrEcO">
                            <div className= "Pre">
                                Preço Unitario
                            </div>
                            <div className="valor">
                                R$ 3,50
                            </div>
                        </div>

                        <div className= "SuBT">
                            <div className="itenms">
                                Subtotal de itens
                            </div>
                            <div classNam="valor">
                                R$ 3,50
                            </div>
                        </div>
                    </div>

                    <div className="pronto0sium">
                        <div className="imgstatus">
                            <img src = './assets/imagens/Ellipse 45.svg' alt=""/>
                        </div>
                        <div className= "Statussim">
                            Aguardando a Confirmação !
                        </div>
                        <div className="ccc">
                        <div className="total">
                            Total de Pagamento
                        </div>
                        </div>
                        <div className= "vaLor">
                            R$ 3,50
                        </div>
                    </div>

                    <div className = "numerope">
                        <div className="nprod">
                            Nº do Pedido
                        </div>
                        <div className= "numeropedido">
                            2527
                        </div>
                        </div>
                        <div className="butons">
                            <div className= "buto1">
                            <button> Vizualizar </button>
                            </div>
                        
                        </div>
                        
                    </div>
                   
             
                    <Rodape/>
        </Conteinercompras>
    )
}