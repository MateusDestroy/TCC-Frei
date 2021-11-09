import styled from "styled-components";


const ConteinerCadastrar = styled.div`
display: flex;
flex-direction: column;
background-color:#D2F6FF;
height: 100vh;


.conteinercadastro {
display: flex;
flex-direction: column;
flex-direction: arrow;
align-items: center;
justify-content: center;
}

.as {

    position:absolute;
    bottom:0;
    width:100%;
}

   

.input-endereco {
 
}

.input-sexo {
    margin-right: 50px;
}

.input-nome{
    margin-right: 50px;
}

.caixa1-inputs {
    font-family: Gabriela;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    justify-content: left; 
    
}

.isafoi, .ok {
    display: flex;
    justify-content: space-between;
    margin-top: 0.9em;
    font-size: 20px;
    align-items: center;
    margin-left: 100px;
}

.opa {
    display: flex;
    justify-content: space-between; 
    margin-top: 0.9em;
    font-size: 20px;
    justify-content: left;
}

.titulo {
    font-family: Lobster;
}



.senha {
    font-family: Gabriela;
    display: flex;
    justify-content: space-between;
    margin-top: 0.9em;
    font-size: 20px;
    justify-content: left;
}

.cidade {
    font-family: Gabriela;
    display: flex;
    justify-content: space-between;
    margin-top: 0.9em;
    font-size: 20px;
    justify-content: left; 
}

.complemento {
    font-family: Gabriela;
    display: flex;
    justify-content: space-between;
    margin-top: 0.9em;
    font-size: 20px;
    
}

.caixa2-inputs {
    font-family: Gabriela;
    display: flex;
    justify-content: space-between;
    margin-top: 0.9em;

    font-size: larger;
    font-size: 20px;
    justify-content: left; 
    margin-right: 295px;
}

.caixa3-inputs {
    font-family: Lobster;

    display: flex;
    justify-content: space-between;
    margin-top: 0.9em;
    
    font-size: 20px;
    justify-content: left;
}

.Titulo {
    
    text-align: center;
    font-family: Lobster;
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 62px;
    
    color: #000000;
}

input {
    align-items: center;
    background: #FFFFFF;
    opacity: 0.95;

    border-radius: 30px;
    border: none;
}

.carolfoi {
    display: flex;
    flex-direction: row;
    margin-top: 0.9em;
}

select {
    text-align: center;
    width: 12em;
}


.Botaomae {
    display: flex;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin-top: 0.9em;
}

button {
    border: none;
    font-family: Lobster;
    padding: 10px;
    margin: auto;
    width: 10em;
    font-size: 15px;
    margin-top: 1em;

}

.nascimento input {
    width: 5em;
    height: 1.5em;
    margin-left: 20px;
    text-align: center;
    font-family: Gabr;
}



.botão1 > button {
    background-color:#FF4949;
    opacity: 0.75;
    border-radius: 30px;
    text-align: center;
    font-family: Lobster;
    
}

.botão > button {
    background-color:#1AF38B;
    opacity: 0.75;
    border-radius: 30px;
    position: absolute;
}



.Botaomae {
    display: flex;
    flex-direction: column;
}

.Cancelar {
    font-size: 50px;
}



`

export {ConteinerCadastrar}