import mysql from 'mysql2';
import keys from './keys';


const pool = mysql.createPool(keys.database);

pool.getConnection((err, conn) => {
    console.log("Database is connected!");
});

export default pool;
