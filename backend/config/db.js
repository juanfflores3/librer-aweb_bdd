const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  database: 'Librería_RIW', 
  port: 3307,
});

module.exports = pool;
