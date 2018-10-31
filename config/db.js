let mysql = require('mysql');

let connMySql = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'portal_noticias'
    });
}

module.exports = (() => {
    return connMySql;
});
