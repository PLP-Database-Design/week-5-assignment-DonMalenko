//import package
const mysql = require('mysql2')

//create connection
const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'hospital_db'
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