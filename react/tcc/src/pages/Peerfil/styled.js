import styled from 'styled-components'


const ConteinerPerfils = styled.div`
 background-color: #D2F6FF;
 height: 100vh;

 .as {

position:absolute;
bottom:0;
width:100%;
}

 a {
     text-decoration: none;

 }

a > div {
    margin-bottom: 12px;
}
 input, button  {
    outline: none;
 }


h1 {
    padding-left: 2.5em;

}

h5 {
    color: #878282;
    font-size: 16px;
    line-height: 23px;
    padding-left: 5em;
}
.per-box {
    display: flex;
    justify-content: space-between;
    padding: 0px 17em 0px 5em;
   
}

.tab {
    border: 0px solid rgba(255, 255, 255, 0.4);
background-color: rgba(255, 255, 255, 0.4);
padding: 2em;   
width: 40em;
}
.per-form {
    padding-top: .5em;
}

.per-contas > div {
    margin-bottom: 12px;
    cursor: pointer;
    text-decoration: none;


}
.per-contas > a:hover {
color: #006BA1E5;
text-decoration: none;

}

.mi {
display: flex;
flex-direction: row;
align-items: center;
margin-left: -38px;
}

.mi h3 {
    margin-left: 7px;
}

.genero, .nascimento {
    display: flex;
    text-align: center;
    align-items: center;
}

.genero input {
    margin-left: 20px;
}

.nomes {
display: flex;
flex-direction: row;
height: 2em;
align-items: center;

}
.nomes input {
    margin-left: 20px;
    width: 20em;
}



.nascimento input {
    width: 15em;
    height: 1.5em;
    margin-left: 20px;
    text-align: center;
}

.but {
    margin: 2em 40em;

    text-align: center;
    
    border-radius: 35px;
    padding: 1em 2em;
    width: 5em;
    background-color: #1AABF3;
    cursor: pointer;
}

.but:hover, .buts:hover {
    color: white;
    background-color: #006BA1E5;
    transition-duration: 1.5s;
}

.en-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.per-box1 {
    display: flex;
    justify-content: space-between;
    padding: 0px 5em 0px 5em;
   
}

.tabela {
    display: flex;
    flex-direction: column;

}

.en-endereco {
border: 0px solid rgba(255, 255, 255, 0.4);
background-color: rgba(255, 255, 255, 0.4);
padding: 2em;   
width: 50em;
margin-bottom: 20px;

}


.no, .bot, .tel, .end {
display: flex;
flex-direction: row;
margin-bottom: 20px;

}

.bot > div {
    cursor: pointer;
    margin-left: 45px;
}

.bot > div:hover {
    color: red;
}

.per-box2 {
    display: flex;
    justify-content: space-between;
    padding: 0px 20em 5em 5em;
   
}


.sen-tabela {
    border: 0px solid rgba(255, 255, 255, 0.4);
background-color: rgba(255, 255, 255, 0.4);
padding:  2em;   
width: 35em;
margin-top: 4em;

}

.sen {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
}

.sen input {
width: 55%;
height: 2em;
border-radius: 5px;
border: 1px solid black;
padding: 1px 10px;
}

.sen > div {
    margin-right: 10px;
    align-items: center;
    color: #0A0A0A;
}

.sen button {
    position: relative;
    right: 9.2em;

    width: 70%;
    height: 2.3em;
    border-radius: 5px;
    background-color: white;
    border: 1px solid black;
    outline: none;
}

.buts {
    margin: 0em 10em;

text-align: center;

border-radius: 35px;
padding: .5em 2em;
width: 4em;
background-color: #1AABF3;
cursor: pointer;
}
`
export { ConteinerPerfils }