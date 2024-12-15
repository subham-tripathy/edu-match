const { Client } = require("pg");

const con = new Client({
    user: "postgres",
    host: "localhost",
    database: "edumatch",
    password: "rajabhai",
    port: 5432,
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