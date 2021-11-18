import styled from "styled-components";



const ConteinerLogin = styled.div `
    display: flex;
    justify-content: center;
    height: 100vh;
    width: auto; 

    background-image: url("./assets/imagens/Background.svg");
    background-size: cover; 
    background-repeat: no-repeat; 


.ConteinerLogin{
    
    border-radius: 30px;
    height: 30em;
    width: 36em;

    padding-bottom: 8em;
   margin-top: 1em;
    font-family: Lobster;
    color: #568EAE;

    background-color: black;
    opacity: 90%;
}


.Login {
    padding-top: 2em;
    margin-top: 5em;
}

.logo {
    padding-left: 25em ;
}

.titulo{
    text-align: center;
}

.Bemvindo {
    padding-bottom: 0.5em;

    font-size: 2em;
}

.logar{
    padding-bottom: 1em;

    font-size: 2em;
}

.inputs{
    font-size: 1em;
    text-align: center;  
}

.email {
    
    padding-bottom: 2em;
}

.senha{
    padding-bottom: 2em;
}

input {
    
    width: 320px ;
    height: 50px;
    padding-left: 15px;
    border: none;
    border-radius: 30px;
    outline: red;
}


.botão {
    padding-top: 1em;
    
    text-align: center;

}

button {
    cursor: pointer;

    width: 200px ;
    height: 50px;
    border: none;
    font-size: 30px;
    background-color:  #568EAE;
    color: white; 
    border-radius: 10px;
}

.func-para-cadastro{
    text-align: center;
    padding-top: 20px;
}


.cria {
    padding-top: 5px;

}

.cria a {
    color: white;
    text-decoration: none; 
}





span {
    color: white; 
    cursor: pointer;
        :hover {
            color: red;
        }
}

@media (max-width: 375px) {
 width: 100vh;

.ConteinerLogin {
    width: 100vh;
    margin-left: 7em;
    margin-top: 1em;
}
}





`

export {ConteinerLogin}