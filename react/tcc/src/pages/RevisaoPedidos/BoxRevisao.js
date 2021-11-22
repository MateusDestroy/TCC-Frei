import Cookie from "js-cookie";
import { useEffect } from "react";
import { useState } from "react"


    export default function BoxItem(props) {
        const [ produto, setProduto ]  = useState(props.info)
        const [preco, setPreco] = useState(0)



        // function atualizarTotal() {
        //     let carrinho = Cookie.get('carrinho');
        //     carrinho = carrinho != null
        //                         ? JSON.parse(carrinho)
        //                         : [];
    
        //     let t = carrinho.reduce((prev,curr) => prev + curr.vl_valor * curr.qtd, 0);
        //     t = Number(t.toFixed(2)); 
        //     setTotal(t)
        // }
    

        function multiplicar() {
            setPreco(produto.vl_valor * produto.qtd);
        }
      


        useEffect(() => {
            multiplicar();
            
           })
        return(
            <comtainersla>
               
            <tbody>
                <tr>
                <td style={{width: '12%'}}><img src={produto.img_produto} alt="" width="90%"/></td>         
                <td>  {produto.nm_produto} </td>
                    <td> R$: {produto.vl_valor} </td>
                    <td>  {produto.qtd}</td>
                    <td> R$ {preco} </td>
                                      
                </tr>
            </tbody>
            
        </comtainersla>
        )
    }
