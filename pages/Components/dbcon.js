const { Client } = require('pg');

// Configure the database connection
const con = new Client({
    user: 'subham',
    host: 'subham-tripathy-db-4612.7s5.aws-ap-south-1.cockroachlabs.cloud',
    database: 'edumatch',
    password: 'Xxe0mTKFOql4jhGqZXWDhg',
    port: '26257', // CockroachDB port
    ssl: {
        mode: 'verify-full',
        rejectUnauthorized: true,
    },
});

// Connect to the database
con.connect()
    .then(() => {
        // console.log('Connected to the database');
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err);
    });


export default con;