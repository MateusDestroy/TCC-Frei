import { useState } from "react"
import { ContainerPag } from "./styled"


export default function Pagamento() {
    const [cores, SetCores] = useState('');

    function getTamanhoStyle(t) {
        if (cores === t)
            return { backgroundColor: '#000', color: '#fff'}
        else 
            return {}
    }

    return(
        <ContainerPag>
            <div className="image1">  <img src="./assets/imagens/mastercard.png" alt=""/> </div>
            <div className="image2">  <img src="./assets/imagens/hipercard.png" alt=""/></div>
            <div className="image3">  <img src="./assets/imagens/visa.png" alt=""/></div>
            <div className="image4">  <img src="./assets/imagens/elo.png" alt=""/></div>
        </ContainerPag>
    )
}