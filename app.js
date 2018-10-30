let express = require('express');
let app = express();
app.set('view engine', 'ejs');

app.get('/tec', ((req, res) => {
    res.render('secao/tecnologia');s
}));

app.listen(3000, () => {
    console.log('express');
});