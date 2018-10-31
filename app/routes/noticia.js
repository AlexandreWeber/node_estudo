
module.exports = ((app) => {
    app.get('/noticia', ((req, res) => {
        
        let connection = app.config.db();

        let noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticia(connection, function (error, result) {
            res.render('noticias/noticia', { noticia : result });
        });

    }));
});