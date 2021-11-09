


//....:PRODUTOSCONTROOL.JS

app.get('/produto/:id', async (req, resp) =>{
    let r = await db.infoa_sti_produto.findAll({ where: {id_categoria: req.params.id}});
    resp.send(r);
})


app.get('/produto', async (req, resp) => {


    const data = await db.infoa_sti_produto.findAll({where: id_categoria});

    
    resp.send(data);

});



