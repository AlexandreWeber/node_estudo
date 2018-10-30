let dbConection = require('../../config/db');

module.exports = ((app) => {
    app.get('/noticias', ((req, res) => {

        let connection = dbConection();

        connection.query('select * from noticias', function(error, result) {
            res.render('noticias/noticias', { noticias : result });
        });

    }));
});