const { Client } = require("pg");

const con = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DBNAME,
    password: process.env.DB_PW,
    port: process.env.DB_PORT,
});

con.connect()
    .then(() => {
        console.log("Connected to PostgreSQL database");
    })
    .catch((err) => {
        console.error("Connection error", err.stack);
    });

// con.query("SELECT NOW()", (err, res) => {
//     if (err) {
//         console.error("Query error", err.stack);
//     } else {
//         console.log("Current Time:", res.rows[0]);
//     }
// });
module.exports = con