let express = require('express');

let app = express();

app.get('/', ((req, res) => {
    res.send('<h1>Olá</h1>')
}));

app.listen(3000, () => {
    console.log('express');
});