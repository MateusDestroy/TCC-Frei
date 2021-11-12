import styled from "styled-components";





const ConteinerProdutos = styled.div`



/// Incio de tudo

.Conteinerimg {

    height:120vh;
    width: auto; 

  

    background-image: url("./assets/imagens/Background.svg");
    background-size: cover; 
    background-attachment: fixed;
    background-repeat: no-repeat; 
}



.Detalhes{ 
display: flex; 
flex-direction: row;


 margin-left: 0.5em;


 padding-top: 8em;
 padding-left: 5em; 
}



.DetalhesProdutos{
    display: flex;
    flex-direction: column;
    height: 33em ;
    width: 70em;


    
    margin-right: 5em;

    align-items: center;
    padding-top: 1em;
    padding-bottom: 2em;
    padding-left: 1em ; 
    border-radius: 5px;
   

    
    background-color: #E8E1DD;
      
}


.Imagem-produto img {
    height: 20em;
    width: 25em;

    border-radius: 20px;
    
}

.informações-produto {
    display: flex;
    flex-direction: column;
}

.Produto {
    display:flex; 
    flex-direction: row;
    align-items: center;
   

    padding-top: 1em;
  



}


.informaçõesproduto {
    padding-left: 5em;

}

.informações {
    display: flex;
    flex-direction: row; 
    padding-top: 2em;
}

.valor-Produto{
    padding-top: 10px;
    padding-right: 5em;
    

   font-weight: 10px;

}

 .adicionarCarrinho {
    padding: 10px;


    margin-left: 1em;



    border-radius: 20px;
    border:none;
    background-color: #CCA577;
    
    
}


a {
    text-decoration: none;
    color: white;
}

a:hover {
    color: #2872FF;
}







.conteinerDescricao {
    margin-top: 5em;
}

.Descrição-produto {
    margin-top: 1em;
    margin-right: 5em;
  
}








`




export {ConteinerProdutos}