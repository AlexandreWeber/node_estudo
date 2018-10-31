
module.exports = ((app) => {
    app.get('/noticias', ((req, res) => {

        let connection = app.config.db();
        let noticiasModel = app.app.models.noticiasModel;
        console.log('1');
        noticiasModel.getNoticias(connection, function (error, result) {
            res.render('noticias/noticias', { noticias : result });
        });
    
    }));
});