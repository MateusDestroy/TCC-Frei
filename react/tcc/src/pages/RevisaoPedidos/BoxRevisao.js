import { useState } from "react"


    
    export default function BoxItem(props) {
        const [ produto, setProduto ]  = useState(props.info)

        return(
            <comtainersla>
               
            <tbody>
                <tr className="Img">
                <td style={{width: '12%'}}><img src={produto.img_produto} alt="" width="90%"/></td>         
                <td>  {produto.nm_produto} </td>
                    <td> R$: {produto.vl_valor} </td>
                    <td>  {produto.qtd}</td>
                    <td> R$ 50 </td>
                                      
                </tr>
            </tbody>
            
        </comtainersla>
        )
    }
