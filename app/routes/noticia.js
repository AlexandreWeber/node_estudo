
module.exports = ((app) => {
    app.get('/noticia', ((req, res) => {
        
        app.config.db().query('select * from noticias where id_noticia = 1', 
        function (error, result) {
            res.render('noticias/noticia', { noticia : result });
        });

    }));
});