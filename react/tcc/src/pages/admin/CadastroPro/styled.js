import styled from "styled-components";


const ConteinerCadastro = styled.div`
background: linear-gradient(to top, #33ccff 0%, #0000ff 100%);
height: 100vh;





.conteiner-cadastro {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 5em;
    
    
}

.label {
    display: flex;
    flex-direction: row;
    padding-bottom: 0.5em;
    color: white;
}



.inputs {
    display: flex;
    flex-direction: column;
    font-family: 'Courier New', Courier, monospace;


}


.titulo {
    display: flex;
    flex-direction: row;
    padding-bottom: 2em;
    color: white;
    font-family: 'Courier New', Courier, monospace;

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


.Informação {
    display: flex;
    align-items: center;
    justify-content: center;
}

.botões {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
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
    padding-top: 5% ;
    display: flex;
    align-items: center;
    justify-content: center;
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