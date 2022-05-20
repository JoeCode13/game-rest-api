import mysql from 'mysql2';
import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection((err, conn) => err != null ? console.log(err) : console.log('database connected'));

export default pool;
