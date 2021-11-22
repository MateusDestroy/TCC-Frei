import styled from "styled-components";


const Tristeza = styled.div`
margin-right: 0.5em;


img {
    cursor: pointer;
}
:hover {
    .ffs {
        visibility: visible;
    }
}

.ffs {

    visibility: hidden;
    position: absolute;
    right: 2em;
    opacity: 90%;

    background-color: #FFD9D9;
    border: 2px #FFD9D9 solid;

    width: 7em;

    text-align: center;
}

  .names {

    color: black;
    margin: 5px 0px;
    cursor: pointer;
    :hover {
         color: cadetblue;
    }
}

.bord {
    border: 2px solid black;
    margin-bottom: -2px;
    margin-left: -2px;
    width: 101%;
}
`

const ConteinerCabecalho = styled.div`

a {
    text-decoration: none;
    color: white;
}

a:hover {
    color: #2872FF;
    
}

.ConteinerCabecalho{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
  
}
.conteudo {
    display: flex;
    justify-content: space-between;
    color: white;
    margin-left: 15em;

}

.conteudo > div {
    margin-right: 10em;
}
.entrada{
    display: flex;
    flex-direction: row;
    padding-right: 1em;
    padding-right: 20px;
    align-items: center;
}
.barra {
    
  background-color: gray;
  height: 35px;
  width: 0.2%;  
  margin-right: 15px;

}

.barra1 {
  background-color: gray;
  position:stick;
  top: 0;
  left:  96%;
  right: 0;
  height: 35px;
  width: 0.2%;  
  height: 35px;
  width: 0.1%;  
  margin-right: 20px;
}



.imagem-lupa{
    margin-left: 10px;
}


.imagen-login{
    margin-left: 10px;
}

.Imagen-login> div{
    margin-left: 10px
}
.imagem-login{
    margin-right: 10px;
  
}
 
@media (max-width: 1280px) {

.conteudo {
    
margin-left: 11.2em;
}
}

`
export {ConteinerCabecalho, Tristeza}