module.exports = ((app) => {
    app.get('/formulario_inclusao_noticia', ((req, res) => {
        res.render('admin/form_add_noticia',  { validacao : {} });
    }));

    app.post('/noticias/salvar', ((req, res) => {
        let noticia = req.body;
        req.assert('titulo', 'Titulo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Máximo 100 e minimo 10').len(10, 100);
        req.assert('autor', 'Autor obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é obrigatório').notEmpty();
        req.assert('noticia', 'Notícia obrigatória').notEmpty();

        let errors = req.validationErrors();
        if (errors) {
            res.render('admin/form_add_noticia', { validacao : errors });
            return;
        }

        let connection = app.config.db();
        let noticiasModel = new app.app.models.NoticiasDAO(connection);
        
        noticiasModel.salvarNoticia (noticia, function(error, result) {
            res.redirect('/noticias');
        });
    }));
});