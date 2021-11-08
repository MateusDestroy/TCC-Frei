import { Link } from 'react-router-dom'
import { Conteineradml } from './styled'
export default function logadm () {

    return (
        <Conteineradml>
            <div className= "pagina-01">
                <div className= "div01">
                    <div className = "imgdiv01">
                        <img src= "./assets/imagens/kisspng-responsive-web-design-clip-art-web-development-vec-anlise-de-processos-jtp-solution-5bd14eb7de8653 2.png" height= "500"alt=""/>
                    </div>
                </div>
                
                <div className= "div02">
                   <div className= "titulo">
                   Seja bem-vindo!
                    </div> 
                    <div className= " subtitulo">
                    Acesso ao setor adminstrativo
                    </div>
                    <div className= "inupt-01">
                    <input type="text" class="custom-file-input" name="search" placeholder="Email de acesso" />
                    </div>
                    <div className= "inupt-02">
                    <input type="text" class="custom-file-input" name="search" placeholder="Senha de acesso" />
                    </div>
                    <div className= " buto">
                        <Link to="./OP"> <button className="NGNDJ"> Entrar</button> </Link>
                    </div>
                    </div>
                    
                    
               
            </div>
        </Conteineradml>
    )
}