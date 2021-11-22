import { useState } from "react";
import { ContainerPag } from "./styled"


export default function Pagamento() {
    const [opcao, setOpcao] = useState('');


    function get(c) {
        if (opcao === c) 
        return { backgroundColor: '#ECECEC', border: 'none', borderRadius: '10px'}
       else 
       return {}
  
    }
    return(
        <ContainerPag>
            <div className="image1" onClick={() => setOpcao('Mastercard')} style ={get('Mastercard')}>  <img src="./assets/imagens/mastercard.png" alt=""/> </div>
            <div className="image2" onClick={() => setOpcao('HiperCard')} style ={get('HiperCard')}>  <img src="./assets/imagens/hipercard.png" alt=""/></div>
            <div className="image3" onClick={() => setOpcao('Visa')} style ={get('Visa')}>  <img src="./assets/imagens/visa.png" alt=""/></div>
            <div className="image4" onClick={() => setOpcao('Elo')} style ={get('Elo')}>  <img src="./assets/imagens/elo.png" alt=""/></div>
        </ContainerPag>
    )
}