
module.exports.index = function (app, req, res) {
    let connection = app.config.db();

    let noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getUltimasNoticias(function(error, result) {
        res.render('home/index', { noticias : result });
    });
};
    
