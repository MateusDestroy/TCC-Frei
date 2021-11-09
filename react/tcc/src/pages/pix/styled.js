import styled from 'styled-components'

const ContainerCarrinho = styled.div`
display: flex;
flex-direction: column;



.cc {
    background-color: #F3F3F3;
    border-radius: 20px;
    margin: 5em 10em;
    text-align: center;
    height: 34em;

    > div {
        margin-top: 2em;
    }
    input {
    height: 1.5em;
    width: 25em;
    text-align: center;

    background-color: white;

    font-size: 20px;
    }
}

.but {
    display: flex;
    justify-content: flex-end;
    margin-right: 4em;
    > a > button {
        padding: .8em 4em;
        
        background-color:#006BA1E5;
        border: 0px solid #006BA1E5;
        color: white;
        cursor: pointer;

        border-radius: 5px;
        outline: none;
    }
}

.text1 {
    font-size: 12px;
    color: red;
}


`
export { ContainerCarrinho }