var mysql = require("mysql");

function createConnection() {
    var connection = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "new password",
        database: "my_blog"
    });
    return connection;
}

module.exports.createConnection = createConnection;