import { useState, useEffect } from "react"


    
    export default function BoxItem(props) {
        const [produto, setProduto] = useState(props.location.state);  

        return(
            <comtainersla>
               
            <tbody>
                <tr>
                    <td style={{width: '12%'}}></td>
                    <td>  {props.info.nm_produto} </td>
                    <td> R$: </td>
                    <td> 
                    R$: {produto.vl_valor}
                    </td>                  
                </tr>
            </tbody>
            
        </comtainersla>
        )
    }
