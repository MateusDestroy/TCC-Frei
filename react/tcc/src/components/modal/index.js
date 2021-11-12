
import { useEffect, useState } from "react";
import styled from "styled-components";

import Api from '../../services/api'

const api = new Api();

const Container = styled.div `
 position: fixed;
    top: 0px;
    left: 0px;

    display: ${props => props.show === true ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;

    background-color: rgba(0,0,0,0.6);
    height: 100vh;
    width: 100vw;
    z-index: 100;

  .content {
    margin-top: -100px;
    background-color: #fff;
    padding: 1em;
    border-radius:27px;
  }


  .box1, .box2 {
      display: flex;
      flex-direction: row;
      width:100%;
      justify-content: center;
      
       
      
  }
 
  .box2{
     margin-left:.7em;
     margin-top: .7em;
 }

  .numero > input , .numero>div{
    
    border-radius: 27px;
    width: 8em;
    height:1.7em
  }

  

   .comple > input , .comple> div  {
    width: 8em;
    border-radius: 27px;
    height:1.7em;
    
  }

  input {
    margin-top: 0em;
    outline: none;
  }

  .butt {
      display: flex;
      justify-content: flex-end;

      margin-top: 2em;
  }

  button {
      margin-left: 2em;
      border: solid #1f628d 1px;
      border-radius:27px;
      background-color: #1c85c7;
      width: 7em;
      height:2.5em;
  }

  .cep> input{
      margin-right: 1em;
      border-radius:27px;
      height:1.7em;
  }
  
  .comple{
      margin-right: 2.6em ;
      
  }

  .descricao> input{
      border-radius:27px;
      margin-right: 1em;
      height:1.7em;
  }
  
  .cida > input {
    border-radius:27px;
    height:1.7em;
  
  }

`


export default function Model(props) {
    const [cep, SetCep] =useState('')
    const [endereco, SetEndereco] =useState('')
    const [numero, SetNumero] =useState('')
    const [complemento, SetComplemento] =useState('')
    const [cidade, SetCidade] =useState('')
    const [tudo, SetTudo] =useState([])


    async function Inserir(id) {
        const produtosr = await api.CadastraEndereco(id, cep , endereco, numero, complemento, cidade);
        SetTudo(produtosr);
    }

    useEffect(() => { 
        Inserir()
      })

    return(
        <Container show={props.show}>
            <div className="content">
                <div className="box1">
                    <div className="cep"> 
                        <div>CEP: </div>
                        <input type="" value = {cep} onChange = {e => SetCep (e.target.value)}/>
                    </div>
                    <div className="descricao"> 
                        <div>Endereço:</div>
                        <input type="" value = {endereco} onChange = {e => SetEndereco (e.target.value)}/>
                    </div>
                    <div className="cida"> 
                        <div>Cidade:</div>
                        <input type="" value = {cidade} onChange = {e => SetCidade (e.target.value)}/>
                    </div>
                </div>
                <div className="box2">
                    <div className="numero"> 
                        <div>Numero:</div>
                        <input type="" value = {numero} onChange = {e => SetNumero (e.target.value)}/> </div>
                    <div className="comple"> 
                        <div>Complemento:</div>
                        <input type="" value = {complemento} onChange = {e => SetComplemento (e.target.value)}/>
                    </div>
                   
                </div>
                <div className="butt">
                    <button>Fechar</button>
                    <button onClick={() => tudo()}>Cadastrar</button>
                </div>
            </div>
        </Container>
    )
}