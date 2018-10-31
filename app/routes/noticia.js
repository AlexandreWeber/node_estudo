
module.exports = ((app) => {
    app.get('/noticia', ((req, res) => {
        
        let connection = app.config.db();

        let noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticia(function (error, result) {
            res.render('noticias/noticia', { noticia : result });
        });

    }));
});