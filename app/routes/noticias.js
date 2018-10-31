
module.exports = ((app) => {
    app.get('/noticias', ((req, res) => {

        let connection = app.config.db();
        
        let noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function (error, result) {
            res.render('noticias/noticias', { noticias : result });
        });
    
    }));
});