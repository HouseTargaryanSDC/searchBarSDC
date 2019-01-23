// const mysql = require('mysql');
// const mysqlConfig = require('./config.js');

// const connection = mysql.createConnection(mysqlConfig);

const Sequelize = require('sequelize');
const sequelize = new Sequelize('tableitsdc', 'daniellin215', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});

module.exports = { sequelize };
// connection.end();

// const { Client } = require('pg');
// const client = new Client();
// await client.connect();
// const res = await client.query('SELECT $1::text as message', ['Hello world!']);
// console.log(res.rows[0].message);
// await client.end();