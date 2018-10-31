
module.exports = ((app) => {
    app.get('/noticias', ((req, res) => {
        
        app.config.db().query('select * from noticias', function(error, result) {
            res.render('noticias/noticias', { noticias : result });
        });

    }));
});