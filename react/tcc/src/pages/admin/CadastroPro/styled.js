import styled from "styled-components";


const ConteinerCadastro = styled.div`



height: 41em;
background-color: #D2F6FF;
text-align: center;


.conteinercadastro {
    display: flex;
    flex-direction: row;
    
}

.conteiner-cadastro {
    display: flex;
    flex-direction: column;
   
   

    padding-top: 5em;
    padding-left: 8em;
    
}

.label {
    display: flex;
    flex-direction: row;
    padding-bottom: 0.5em;
}



.inputs {
    display: flex;
    flex-direction: column;
  
}


.titulo {
    display: flex;
    flex-direction: row;
    padding-bottom: 2em;
}



.InfoProduto {
    display: flex;
    flex-direction: row;
    padding-bottom: 2em;
    
}

.infovalor {
    display: flex;
    flex-direction: row;
    padding-bottom: 2em;
}

.descriçãoPro {
    display: flex;
    flex-direction: row;
    padding-bottom: 2em;
}


.botões {
    display: flex;
    flex-direction: row;
}

img {
    height: 18px;
    width: 18px;
}

.input-text{
    padding-right: 3em;
}

.dsProduto{
    padding-right: 10em;
    height: 25px;
}

select{
    padding-right: 3em;
    height: 30px;
}

.input-text-valor {
    padding-right: 5em;
}

.valorProduto {
   
    height: 25px;
    width: 80px;
}

.valorEstoque {
    padding-right: 2em;
    height: 25px;
    width: 10em ;
}

.input-text-estoque {
    padding-right: 6.7em;
}

textarea {
   resize: none;
    width: 881px;
    height: 78px;
}

.informações {
    padding-right: 14em;
}

.Informação {
    padding-left: 9em;
    padding-bottom: 1em;
}

.botões {
    padding-top: 2em;
    padding-left: 20em;
}

.cadastra {
    padding-right: 2em;
}

.confirmar {
   
   display: flex;
   flex-direction: row;
   padding-top: 17px;
   padding-bottom: 15px;
   padding-right: 10px;
   padding-left: 10px;
   border-radius: 25px;

   border:none; 
   cursor: pointer;

   color: white;
   background-color: green;
}

.confirmar img {
    padding-right: 0.2em;
}



.Cancelar {
   
   display: flex;
   flex-direction: row;
   padding-top: 15px;
   padding-bottom: 14px;
   padding-right:12px;
   padding-left: 10px;
   border-radius: 25px;

   border:none; 
   cursor: pointer;

   color: white;
   background-color: #BE1900;
}

.Cancelar img {
    width: 1.5em;
    height: 1.4em;
    
    padding-right: 0.2em;
}

.arquivoUp{
padding-left: 19.5em;
}


.Updimg {
   display: flex;
   flex-direction: row;
   padding-top: 15px;
   padding-bottom: 14px;
   padding-right:12px;
   padding-left: 15px;

   cursor: pointer;

   border-radius: 25px;
   border:none;

   color:white;
   background-color: #85144B;

}

.Updimg img {
    padding-right: 1em;
}




`

export{ConteinerCadastro}