import db from './db.js';
import express from 'express';
import cors from 'cors';
import path from 'path'




const app = new express()
app.use(cors())
app.use(express.json())




/*/
app.get('/pedidos', async (req, resp)=>
    try {
        let admin = await db.infoa_sti_venda.findAll()
        resp.send(admin)
    } catch (e) {
        resp.send({errp: e.toString()})
        
    }
)
*/




app.post('/cadastrar-endereco/:id', async (req, resp) => {
    let x = req.body;
    
    try {
        const Endereco = await db.infoa_sti_endereco.create({
            id_cliente: req.params.id,
            ds_cep: x.cep,
            ds_endereco: x.endereco,
            nr_numero: x.numero,
            ds_complemento: x.complemento,
            ds_cidade: x.cidade
        })




    resp.sendStatus(200);

} catch (error) {
    resp.send( error.toString() )
}
});

app.post('/cadastarcliente', async (req, resp) => {
    try {
        let { nome, sobrenome, sexo, cpf, nascimento, telefone, email, senha } = req.body;
        
        let r = await db.infoa_sti_cliente.create({
            nm_nome: nome,
            nm_sobrenome: sobrenome,
            ds_sexo: sexo,
            ds_cpf: cpf,
            dt_nascimento: nascimento,
            ds_telefone: telefone,
            ds_email: email,
            ds_senha: senha
        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
});

app.get('/endereco', async (req, resp) => {
    try {
        let users = await db.infoa_sti_endereco.findAll()

        resp.send(users)
        
    } catch (e) {
        resp.send({erro: e.toString()})
    }
});

app.get('/cadastarcliente', async (req, resp) => {
    try {
        let uuso = await db.infoa_sti_cliente.findAll()

        resp.send(uuso)

    } catch (e) {
        resp.send({erro: e.toString()})
    }
});



app.delete('/endereco/:id', async (req, resp) => {
    let r = await db.infoa_sti_endereco.destroy({
        where: {
            id_endereco : req.params.id
        } 
     })
     resp.sendStatus(200);
});


app.get('/endereco-usuario/:id', async (req, resp) => {
    let r = await db.infoa_sti_endereco.findAll({
        where: {
            id_cliente : req.params.id
        },
        include: [
             {
             model: db.infoa_sti_cliente,
             as: 'id_cliente_infoa_sti_cliente',
             required: true
            }
        ]
        
        });
    resp.send(r);
});







//--------------------------------------------------------------------------------------------------------




app.get('/clientes', async (req, resp) => {
    try {
        let users = await db.infoa_sti_cliente.findAll()

        resp.send(users)
        
    } catch (e) {
        resp.send({erro: e.toString()})
    }
});



app.get('/clientes/:id', async (req, resp) => {
    let r = await db.infoa_sti_cliente.findOne({ where: { id_cliente: req.params.id}});
    resp.send(r);
});


app.post('/login', async (req, resp) => {


    let login = req.body;

    let p = await db.infoa_sti_cliente.findOne({
        where: {
            ds_email: login.email,
            ds_senha: login.senha
        }
    })

    if(p == null)
    

    resp.sendStatus(200);
});

app.post('/loginadm', async (req, resp) => {


    let loginadm = req.body;

    let p = await db.infoa_sti_cliente.findOne({
        where: {
            ds_email: loginadm.email,
            ds_senha: loginadm.senha
        }
    })

    if(p == null)
    

    resp.sendStatus(200);
});



app.post('/cadastrar', async (req, resp) => {
    let x = req.body;
     
    try {
       
        const UsuarioCriado = await db.infoa_sti_cliente.create({
            nm_nome: x.nome,
            nm_sobrenome: x.sobrenome,
            ds_telefone: x.telefone,
            ds_sexo: x.sexo,
            ds_cpf: x.cpf,
            dt_nascimento: new Date(),
            ds_email: x.email,
            ds_senha: x.senha
        })
        
 
        const EnderecoCriado = await db.infoa_sti_endereco.create({
            id_cliente: UsuarioCriado.id_cliente,
            ds_cep: x.cep,
            ds_endereco: x.endereco,
            nr_numero: x.numero,
            ds_complemento: x.complemento,
            ds_cidade: x.cidade
        })


    resp.sendStatus(200);

} catch (error) {
    resp.send( error.toString() )
}
});


app.put('/clientessd/:id', async (req, resp) => {
    const {nome} =  req.body;
    let { id } = req.params;



    const Clientes = await db.infoa_sti_cliente.update({
        nm_nome: nome
    },
    { 
        where: { id_cliente: id }
    
    })

    resp.sendStatus(200)


});








//--------------------------------------------------------------------------------------------------------




app.post('/pedidos', async (req, resp) => {
    let d = req.body

    const ender = await db.infoa_sti_endereco.findAll()
    const pro = await db.infoa_sti_produto()


    const cri = await db.infoa_sti_venda.create({

        ds_forma_pagamento: d.pagamento,
        ds_situacao: d.situacao    })

    resp.sendStatus(200);
})

//--------------------------------------------------------------------------------------------------------


app.get('/produto/:id', async (req, resp) =>{
    let r = await db.infoa_sti_produto.findAll({ where: {id_categoria: req.params.id}});
    resp.send(r);
})




app.get('/produto', async (req, resp) => {


    const dat = await db.infoa_sti_produto.findAll();

    
    resp.send(dat);

});




app.post('/cupom', async (req, resp) => {
    let x = req.body;
     
    try {
       
        const cupons = await db.infoa_sti_cupom.create({
            ds_nome_desconto: x.nome,
            vl_cupom: x.valor,
            bt_ativo: true,
        })

    resp.sendStatus(200);
} catch (error) {
    resp.send( error.toString() )
}
});


app.post('/produto', async (req, resp) => {
    
    try {
    const { imagem, produto, codigo, descricao, valor, estoqueMin, estoqueMax, estoqueAtual, categoria} = req.body;
    


    const Produtos = await db.infoa_sti_produto.create({
        img_produto: imagem,
        nm_produto: produto,
        ds_codigo_interno: codigo,
        id_categoria: categoria,
        ds_descricao: descricao,
        vl_valor: valor,
        nr_estoque_minimo: estoqueMin,
        nr_estoque_maximo: estoqueMax,
        nr_estoque_atual: estoqueAtual

    })

    resp.sendStatus(200);

} catch (error) {
    resp.send( error.toString() )
}

});









app.get('/produto', async (req, resp) => {
    const data = await db.infoa_sti_produto.findAll({where: id_categoria});
    resp.send(data);

});




// Alterar Produto 

app.put('/produto/:idProduto', async (req, resp) => {

    const { imagem, produto, codigo, descricao, valor, estoqueMin, estoqueMax, estoqueAtual, sabor} = req.body;


     
    const Sabor = await db.infoa_sti_categoria.update({
        nm_sabor: sabor
    },
    { 
        where: { id_produto: req.params.idProduto }
    })


    const Produtos = await db.infoa_sti_produto.update({
        id_categoria: Sabor.id_categoria,
        img_produto: imagem,
        nm_produto: produto,
        ds_codigo_interno: codigo,
        ds_descricao: descricao,
        vl_valor: valor,
        nr_estoque_minimo: estoqueMin,
        nr_estoque_maximo: estoqueMax,
        nr_estoque_atual: estoqueAtual

    },
    { 
        where: { id_produto: req.params.idProduto }
    })
});




app.delete('/produto', async (req, resp) => {
    let r = await db.infoa_sti_produto.destroy({
        where: {
            id_produto : req.params.idProduto
        } 
     })
     resp.sendStatus(200);
});




app.listen(process.env.PORT,
            console.log(`Servidor na Porta ${process.env.PORT}`));