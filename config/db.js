var mysql = require('mysql');
var {database} = require('./credentials');
var pool = mysql.createPool(database);
const {promisify} = require('util');

// METODO PARA OBTENER CONEXION
pool.getConnection((err, conn) =>{
    if(err){
        console.log("NO PUDIMOS HACER CONEXION");
    }

    if(conn){
        conn.release();
        console.log("Base de datos conectada")
    }
    return;
});

pool.query = promisify(pool.query);


module.exports = pool;