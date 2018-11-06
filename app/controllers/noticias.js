module.exports.noticias = function (app, req, res) {
    let connection = app.config.db();
        
    let noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function (error, result) {
        res.render('noticias/noticias', { noticias : result });
    });
};

module.exports.noticia = function (app, req, res) {
    let connection = app.config.db();
    let noticiasModel = new app.app.models.NoticiasDAO(connection);

    let id = req.query.id_noticia;

    noticiasModel.getNoticia(id, function (error, result) {
        res.render('noticias/noticia', { noticia : result });
    });
};