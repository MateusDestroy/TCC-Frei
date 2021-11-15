import axios from 'axios'
const api = axios.create({
    baseURL : 'http://localhost:3030/'
})


export default class Api{

    async ListarUsuario(id) {
        let r = await api.get(`/clientes/${id}`)
        return r.data; 
    }



    async ListaProdutosDoces(id) {
        let r = await api.get(`/produto/${id}`)
        return r.data; 
    }

    async ListarEndereco(id){
        let r = await api.get(`/endereco/${id}`)
        return r.data; 
    }

    async ListarEnderecoPerfil(id) {
        let r = await api.get(`/endereco-usuario/${id}`)
        return r.data;
    }




 async CadastraProduto(imagem, codigo , produto, Sabor, estoqueMin, estoqueMax, valor , estoqueAtual, descricao){
    let r = await api.post('/produto', {imagem, codigo, produto, Sabor, estoqueMin, estoqueMax, valor, estoqueAtual, descricao})
    return r.data; 
    }

    
 async CadastraEndereco(id, cep , endereco, numero, complemento, cidade){
    let r = await api.post(`/cadastrar-endereco/${id}`, {cep , endereco, numero, complemento, cidade})
    return r.data; 
    } 

    async AlterarCadastro(id,  senha) {
        let r = await api.put('/cliente' + id, senha)
        return r.data;
    }

    async login (email, senha) {
        let r  = await api.post('/login', { email, senha})
        return r.data;
    }

    
    async DeletarEndereco (id) {
        let r = await api.delete(`/endereco/${id}`)
        return r.data;
    }



}