import axios from 'axios'
const api = axios.create({
    baseURL : 'http://localhost:3030'
})


export default class Api{

<<<<<<< HEAD
    async ListaProdutos (imagem, produto, sabor, valor){
        let r = await api.get('/produto', {imagem, produto, sabor, valor})
=======
    async ListaProdutos (){
        let r = await api.get('/sla')
        return r.data; 
    }
    async ListaProdutosDoces(id) {
        let r = await api.get(`/produto/${id}`)
>>>>>>> 8848daaf1984ffe053314ebd07397c490527fc85
        return r.data; 
    }



 async CadastraProduto(imagem, codigo , produto, Sabor, estoqueMin, estoqueMax, valor , estoqueAtual, descricao){
    let r = await api.post('/produto', {imagem, codigo, produto, Sabor, estoqueMin, estoqueMax, valor, estoqueAtual, descricao})
    return r.data; 
    }

    async AlterarCadastro(id, nome, sexo, cpf, nascimento, email, cep, endereco, numero, complemento, cidade) {
        let r = await api.put('/cliente' + id, {nome, sexo, cpf, nascimento, email, cep, endereco, numero, complemento, cidade})
        return r.data;
    }

    async login (email, senha) {
        let r  = await api.post('/login', { email, senha})
        return r.data;
    }

}

