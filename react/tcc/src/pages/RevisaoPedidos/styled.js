import styled from 'styled-components'


const ContainerRevisao = styled.div`
display: flex;
flex-direction: column;
margin: 0px;
box-sizing: border-box;


a:link {
    text-decoration: none;
}


.but-esco {
    display: flex;
    justify-content: flex-start;
    padding: 30px 10em 20px 4.5em;
}   

.but-esco button {
align-items: center;
border: 1px solid #1AABF3;
background-color: #1AABF3;
width: 20em;
height: 4em;
text-align: center;
padding: 0px 0px 0px 35px;
border-radius: 70px;
text-decoration: none;
outline: none;

}
.en-entrega {
padding: 30px 10em 20px 4.5em;
display: flex;
flex-direction:column;

}

.en-cabe {
    display: flex;
justify-content: space-between;
padding: 0px 12em 0px 4.5em;
}


.en-cabe button {
    display: flex;
    flex-direction: row;
    outline: none;
    align-items: center;
    cursor: pointer;
    border: none;
    background-color: white;
    padding: 0px 40px;


}


.en-cabe button:hover {
    border-radius: 50px;
    background-color: #FAFAFA;
    color: black;
    border: #FAFAFA;
}

h3 {
    margin-left: 15px;
}


.entrega, .en-input {
    display: flex;
    flex-direction: row;
    outline: none;

}

.en-input {
    margin-bottom: 30px;
}

.en-input > input {
    margin-right: 10px;
    margin-top: 5px;
}



.entrega > div {
    margin-left: 10px;
}
.entrega:hover {
color: white;
background-color: #006BA1E5;
border: 0px solid #006BA1E5;
cursor: pointer;
outline: none;
}

.end-info {
    display: flex;
justify-content: space-between;
padding: 0px 12em 0px 5em;

}


.tabela, .meto-paga {
  margin: 2em 8em 0em 5em;
}

thead {

    width: 100vw;

}


Img {
    size: 150px;

}


th {
    height: 61.93px;
    text-align: center;
    padding: .1em 5.5em;
    color: #006BA1;
    font-weight: 800;
    
} 
td {
    text-align: center;
    height:  61.93px;
    padding: 1.1em;
    color: #6D6868;
    font-weight: 600;
}

.meto-paga > div {
display: flex;
align-items: center;
text-align: center;
}

.meto-paga {
    display: flex;
}


.precos {
display: flex;
flex-direction: column;
align-items: flex-end;
margin-right: 7em;
margin-top: 20px;
}

.precos > div {
    display: flex;
    flex-direction: row;
}

.box-preco > div {
    margin-top: 10px;
    margin-right: 8px;
}

.pix:hover img{
background-color: white;

}

.pix   {
    padding: 0px 20px 0px 20px ;
}

.din:host {
padding: 0px 40px 0px 20px ;
}



.car {
padding: 0px 20px 0px 0px ;
}

.meto-paga > div:hover {
    cursor: pointer;
    border: 2px solid #1AABF3;
    opacity: 80%;
    background-color: #1AABF3;
    color: white;
    border-radius: 5px;
}




.but {
    display: flex;
    justify-content: flex-end;
    padding-right: 7.5em;
}

.ff {
   
    border: 2px solid #1AABF3;
    background-color: #1AABF3;
    width: 13em;
    padding: 10px 0px 10px 0px;
    margin: 20px 0px 20px 0px;
    border-radius: 5px;
    outline: none;

}




button:hover {
    border: solid #1f628d 2px;
    background-color:#006BA1E5;
    border: 1px solid #006BA1E5;
    color: white;
    cursor: pointer;
    

}
`
export { ContainerRevisao }