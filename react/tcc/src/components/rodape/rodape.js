import { Containersroda } from './styled'

export default function Rodape() {

    return (
        <Containersroda>
            <footer>
                <div className='rodape'>

                    <div className='part-roda1'>
                        <div className='info-01'>
                            Informações de contato
                        </div>
                        <div className='info-02'>
                            Av. Coronel Octaviano de Freitas Costa, 463 - Socorro. São Paulo
                        </div>
                        <div className='info-03'>
                            Telefone: (11) 5687-8876 | 96398-6252
                        </div>
                        <div className='info-04'>
                            contato@testefigma.com
                        </div>
                    </div>

                    <div className='part-roda2'>
                        <div className='info-05'>
                            Horário de  Funcionamento
                        </div>
                        <div className='info-06'>
                            De Segunda à Sexta-Feira <br/> <br/>
                              08:00 às 16:30 
                        </div>
                    </div>

                    <div className=' part-roda3'>
                        <div className='img'>
                            <img src="./assets/imagens/logo1.png" alt="" width="60%"/>
                        </div>
                    </div>
                </div>
                <div className='final1'>
                    <div className='exp'>
                        Todos os direitos reservados | STI ©
                    </div>
                </div>
            </footer>

        </Containersroda>)
}