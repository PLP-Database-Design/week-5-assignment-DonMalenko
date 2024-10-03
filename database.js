//import package
const mysql = require('mysql2')
const dotenv = require('dotenv')


dotenv.config();

//create connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

//connect
db.connect((err) => {
    if (err) {
        console.log('error connecting to database:', err.stack)
        return;
    }

    console.log('sucessfully connected to DB')

})

//export the connection
module.exports = db