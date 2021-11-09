import axios from 'axios'
const api = axios.create({
    baseURL : 'https://tccheroku.herokuapp.com/'
})


export default class Api{

    async ListaProdutos (){
        let r = await api.get('/produto')
        return r.data; 
    }


 async CadastraProduto(imagem, codigo , produto, Sabor, estoqueMin, estoqueMax, valor , estoqueAtual, descricao){
    let r = await api.post('/produto', {imagem, codigo, produto, Sabor, estoqueMin, estoqueMax, valor, estoqueAtual, descricao})
    return r.data; 
    }
}

