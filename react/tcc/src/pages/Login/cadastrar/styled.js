import styled from "styled-components";


const Container = styled.div`
`

const ConteinerCadastrar = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: auto; 

background-image: url("./assets/imagens/Background.svg");
background-size: cover; 
background-repeat: no-repeat; 


.box {
    background-color: rgba(0,0,0, 0.90);
    margin-top: 2em;
    margin-left: 7em;

    padding: 3em 2em;
    width: 70em;

    border-radius: 14px;
}

.as {
    color: white;
    text-align: center;
    font-size: 24px;
}

.box-cadas {
    display: flex;
    justify-content: space-between;

    padding: 0em 5em 0em 5em;

    align-self: center;
}

.name {
    display: flex;
    flex-direction: row;
    
    align-items: center;
    margin-top: 2em;
}




.nome {
    color: white;
    margin-right: 10px;
}



.inputs > input, select  {
    outline: black;
    padding: 0em .5em;
    width: 15em;
    height: 2.4em;

    border: none;
    border-radius: 12px;
}

select {
    width: 16em;
    text-align: center;
}

.pt {
    margin-right: 4em;
    margin-top: 2em;

    display: flex;
    justify-content: flex-end;

}
button {    
    cursor: pointer;

    margin-right: .8em;

    border: none;
    border-radius: 12px;

    width: 10em;
    height: 2.3em;


    font-size: 17px;
}

.ds{
    background-color: #FF4949;

    :hover {
        background-color: #FF0707;
        color: white;
    }
}

.js {
    background-color: #1AF38B;

    :hover {
        background-color: #00B15C;
        color: white;
    }
}
`

export {ConteinerCadastrar, Container}