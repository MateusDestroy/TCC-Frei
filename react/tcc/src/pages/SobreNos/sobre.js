import { COnteinersobrenos } from './styled'

import Cabecalho from '../../components/cabecalho/cabecalho'
import Rodape from '../../components/rodape/rodape'
export default function sobrenos () {

    return(
        <COnteinersobrenos>
        <Cabecalho />
        <div className= 'Faixa-sobrenos'>
        
            <div className= 'fundo-fsn'>
                <div className= 'titulo-fns'> Nossa Historia </div>
                <div className= 'texto-fns'> <span> Projeto Auto-Sustentável: </span>   Uma vez completado integralmente o projeto, além de formar 1.500 jovens por
                ano em mais de 20 profissões diferentes, se tornará auto-sustentável, na medida em que algumas das
                profissões serão utilizadas como alavancagem, no sentido de gerar recursos para Manutenção e Reparos
                do Prédio e dos Equipamentos, bem como para pagamento da Folha de Funcionários e Professores, além
                da compra de pequenos equipamentos.    
                </div>
                <div className= 'texto-fns2'> As áreas de panificação , gráfica, fotolito, publicidade, rádio e Tv, serão as mais utilizadas em <span> Serviços
                para Terceiros. </span> Já estamos funcionando dentro desta estratégia com a padaria, e iniciando com a gráfica
                (incompleta), uma vez que dispomos apenas de uma pequena Off-Set, insuficiente para enfrentar a dura
                concorrência do mercado. Estamos tendo a oportunidade de arcar com todas as despesas de
                manutenção e folha, com grandes sacrifícios na medida em que não dispomos de todos os recursos
                necessários, contudo com a complementação do projeto, teremos assegurado a sua perenidade.
            </div>
            </div>

            <div className = 'montagem-padaria'>

                <div className = 'titulo'>
                Tradicional da Padaria FREI
                </div>

                <div className = 'img-pt1'>
                    <div className= 'img-pr1'>
                        <img src="./assets/imagens/Pao-doce-coco-creme-Baixa-5 3.png" height="158" width="258" alt="" />
                    </div>
                    <div className= 'img-pr1'>
                        <img src="./assets/imagens/sonho de chocolate.png" height="158" width="258"  alt="" />
                    </div>
                    <div className= 'img-pr1'>
                        <img src="./assets/imagens/Bolo de Fubá.png" height="158" width="258" alt="" />
                    </div>
                    <div className= 'img-pr1'>
                        <img src="./assets/imagens/bolo com cobertura.png" height="158" width="258" alt="" />
                    </div>
                </div>

                <div className = 'img-pt2'>
                    <div className= 'img-pr2'>
                        <img src="./assets/imagens/unnamed 3.png" height="158" width="258" alt="" />
                    </div>
                    <div className= 'img-pr2'>
                        <img src="./assets/imagens/Bolo de pote.png" height="158" width="258" alt="" />
                    </div>
                    <div className= 'img-pr2'>
                        <img src="./assets/imagens/Brigadeiro-Cremoso-Simples-no-Pote-380x254 3.png" height="158" width="258" alt="" />
                    </div>
                    <div className= 'img-pr2'>
                        <img src="./assets/imagens/cafe.png" height="158" width="258" alt="" />
                    </div>
                </div>

                <div className = 'img-pt3'>
                    <div className= 'img-pr3'>
                        <img src="./assets/imagens/29327-sucos-funcionais-extraem-o-melhor-das-fr-article_block_media-2 2 (2).png" height="158" width="258" alt="" />
                    </div>
                    <div className= 'img-pr3'>
                        <img src="./assets/imagens/receitas-de-misto-quente 2.png" height="158" width="258" alt="" />
                    </div>
                    <div className= 'img-pr3'>
                        <img src="./assets/imagens/queijo quente-380x380 2.png" height="158" width="258" alt="" />
                    </div>
                    <div className= 'img-pr3'>
                        <img src="./assets/imagens/1582203069205 2.png" height="158" width="258" alt="" />
                    </div>
                </div>

            </div>
            <Rodape />

         </div>
        </COnteinersobrenos>
    )
}