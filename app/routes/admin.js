module.exports = ((app) => {
    app.get('/formulario_inclusao_noticia', ((req, res) => {
        app.app.controllers.admin.formulario_inclusao_notifica(app, req, res);
    }));

    app.get('/noticias/salvar', ((req, res) => {
        app.app.controllers.admin.formulario_inclusao_notifica(app, req, res);
    }));

    app.post('/noticias/salvar', ((req, res) => {
        app.app.controllers.admin.noticias_salvar(app, req, res)
    }));

    app.post('/formulario_inclusao_noticia', ((req, res) => {
        app.app.controllers.admin.noticias_salvar(app, req, res)
    }));
});