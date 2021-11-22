import { Conteinergeren} from './styled'
import { Link } from 'react-router-dom'

import OptLista from "../../../components/BarOption/index"



export default function gerecniador () {

    return ( 
        <Conteinergeren>

<div className= "PAGINA">
                <OptLista/>
               
                <div className= "parte-02">
                    <div className= "titulo">
                    GERENCIADOR DE PEDIDOS
                    </div>

                   

                <div className = "pesquisa">
                    <div className = "buttom">
                    <Link to="/CadastraProduto">   <button> Adicionar </button> </Link>
                    </div> 
                    <div className= "inupt-01">
                    <input type="text" class="custom-file-input" name="search" placeholder="Pesquisar por: nome ou cod." />
                    </div>       
                </div>

                    <table class ="table-user">
                    <thead>
                        <tr>
                            <th > Cód. Produto </th>
                            <th> Nome </th>
                            <th> Categoria </th>
                            <th> Valor </th>
                            <th> Estq. Minimo </th>
                            <th> Estq. Atual </th>
                            <th> Estq. Maximo </th>
                            <th> Ações </th>
                            
                        </tr>
                    </thead>
            
                    <tbody>
                       <tr>
                            <td>   </td>
                            <td> </td>
                            <td>  </td>
                            <td>  </td>
                            <td > 
                                   </td>
                            <td>  </td>
                            <td>  </td>
                            <td> <img src="./assets/imagens/pngegg (5).png" width="50" alt="" />
                            <img src="./assets/imagens/pngegg (6).png" width="50" alt="" />  </td>
                            
                            
                           
                        </tr>

                    
                    

                    
                        <tr >
                        <td>  </td>
                            <td> </td>
                            <td>  </td>
                            <td>  </td>
                            <td > 
                                   </td>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            
                            
                           
                        </tr>

                        
                    </tbody> 

                </table>
                </div>

            </div>


        </Conteinergeren>
    )

}