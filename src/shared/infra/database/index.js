const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: process.env.DB_HOST_DEV,
    port: process.env.DB_PORT_DEV,
    user : process.env.DB_USER_DEV,
    password: process.env.DB_PASSWD_DEV,
    database: process.env.DB_NAME_DEV,
    multipleStatements: true,
});

module.exports = connection
