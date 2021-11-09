import { Contenenag } from './styled'
import OptLista from "../../../components/BarOption/index"

export default function nav () {

    return ( 
        <Contenenag>
            <div className= "PAGINA">
                <OptLista/>
               
                <div className= "parte-02">
                    <div className= "titulo">
                    GERENCIADOR DE PEDIDOS
                    </div>

                    <table class ="table-user">
                    <thead>
                        <tr>
                            <th > Nº Pedido </th>
                            <th> Cliente </th>
                            <th> Valor </th>
                            <th> Pagamento </th>
                            <th> Pedido </th>
                            <th> Endereço </th>
                            <th> Prazo de Entrega </th>
                            <th> Ações </th>
                            <th> Situação </th>
                        </tr>
                    </thead>
            
                    <tbody>
                        <tr >
                            <td> 8756454353 </td>
                            <td> João João...</td>
                            <td> 11,90 </td>
                            <td> Visa </td>
                            <td > Baguete - 2
                                  Baguete - 3 </td>
                            <td> R. Rio do Vae, 700,
                                 Vila Mariana,
                                  04018002 </td>
                            <td> 17:13 - 17:40 </td>
                            <td> Aprovado </td>
                            <td> Pedido em Confir...</td>
                            
                           
                        </tr>

                        
                    

                    
                        <tr >
                            <td> 8756454353 </td>
                            <td> Joao joao...</td>
                            <td> 11.90 </td>
                            <td> Visa </td>
                            <td > Baguete - 2
                                  Baguete - 3 </td>
                            <td> R Rio do Vae, 700,
                                 Vila Mariana,
                                  04018002 </td>
                            <td> 17:13 - 17:40 </td>
                            <td> Aprovado </td>
                           
                            <td> Pedido em Preparo</td>
                            
                           
                        </tr>

                        
                    </tbody> 

                </table>
                </div>

            </div>
        </Contenenag>
    )
}