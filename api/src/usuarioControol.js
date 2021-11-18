





app.get('/clientes', async (req, resp) => {
    try {
        let users = await db.infoa_sti_cliente.findAll()

        resp.send(users)
        
    } catch (e) {
        resp.send({erro: e.toString()})
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


app.get('/clientes/:id', async (req, resp) => {
    let r = await db.infoa_sti_cliente.findOne({ where: { id_cliente: req.params.id}});
    resp.send(r);
});


app.get('/endereco/:id', async (req, resp) => {
    let r = await db.infoa_sti_endereco.findAll({ where: { id_cliente: req.params.id}});
    resp.send(r);
});




app.post('/login', async (req, resp) => {


    let login = req.body;

    let p = await db.infoa_sti_cliente.findOne({
        where: {
            ds_email: login.email,
            ds_senha: login.senha
        },
        raw: true
    })

    if(p == null)
    return resp.send({erro: 'tudo errado'});

    resp.sendStatus(200);
});


app.post('/cadastrar', async (req, resp) => {
    let x = req.body;
     
    try {
       
        const UsuarioCriado = await db.infoa_sti_cliente.create({
            nm_nome: x.nome,
            nm_sobrenome: x.sobrenome,
            ds_sexo: x.sexo,
            ds_cpf: x.cpf,
            dt_nascimento: x.nascimento,
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


app.post('/cadastrar/:id', async (req, resp) => {
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