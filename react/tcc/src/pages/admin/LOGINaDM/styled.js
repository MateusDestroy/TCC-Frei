import styled from "styled-components";


const Conteineradml  = styled.div `
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
 background: linear-gradient(to top, #33ccff 0%, #0000ff 100%);



* {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;

}

.Titulo {
    font-family: 'Courier New', Courier, monospace;
    font-size: 40px;
    text-align: center;
    color: white;
    margin-bottom: 5%;
    font-weight: 10;
}

.subtitulo {
    font-weight: 100;
    font-family: 'Courier New', Courier, monospace;
    font-size: 26px;
    text-align: center;
    color: white;
    margin-bottom: 5%;
}

.Caixa-01 {
    display: flex;
    flex-direction: row;
    padding-top: 8%;
}

.input-data {
    margin-left: 0.8em;
}

.input-datak {
    margin-left: 0.8em;
}

input {
    border:0;
    font-size: 17px;
    border-radius: 0px;
    background-color: rgba(0, 191, 255, 0.0);
    

}

.bord {
    background-color: #FB8604;
    width: 14em;
    height: 1px;
    position: absolute;
   align-items: center;
   justify-content: center;
   
    
    
}
.n {
    font-size: 20px;
   color: white;
   font-family: 'Courier New', Courier, monospace;
   font-weight: 100;




}

.g{
 font-size: 20px;
color: white;
font-family: 'Courier New', Courier, monospace;
font-weight: 100;
}

button {
    
    background-color: rgba(51, 51, 255, 0.8);
    border-radius: 50px;
    border: 0;
    width: 70px;
    height: 30px;
    cursor: pointer;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    
}

.botão {
    display: flex;
    justify-content: flex-end;
    padding-top: 5%;
}

.logo55 {
    margin-bottom: 6%;
    margin-left: 10%;
    width: 17%;
    text-align: center;

}
.lll {
    color: white;  
    font-family: 'Courier New', Courier, monospace;
    margin-top: 2%;
}
`


export {Conteineradml}