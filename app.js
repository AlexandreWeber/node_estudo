
let app = require('./config/server');
let rota_home = require('./app/routes/home')(app);
let rota_noticias = require('./app/routes/noticias')(app);
let rota_form = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, () => {
    console.log('Servidor no ar');
});