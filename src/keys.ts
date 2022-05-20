export default{
    database: {
        host: process.env.host,
        user: process.env.username,
        password: process.env.password,
        database: process.env.database,
        ssl: {
            rejectUnauthorized: false
        }
    }
}