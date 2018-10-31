module.exports = ((app) => {
    app.get('/formulario_inclusao_noticia', ((req, res) => {
        res.render('admin/form_add_noticia');
    }));

    app.post('/noticias/salvar', ((req, res) => {
        let noticia = req.body;
        let connection = app.config.db();
        let noticiasModel = app.app.models.noticiasModel;
        
        noticiasModel.salvarNoticia (noticia, connection, function(error, result) {
            res.redirect('/noticias');
        });
    }));
});