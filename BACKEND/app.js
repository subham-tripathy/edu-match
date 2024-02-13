function isEmpty(obj) {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) {
            return false;
        }
    }
    return true;
}












const mysql = require('mysql');
const express = require('express')
const app = express()
const port = 5000

const connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: '',
})

connection.connect((err) => {
    if (err) {
        console.log("Error: ", err)
    }
    else {
        console.log('connected to MYSQL')
    }
})



app.get('/', (req, res) => {
    res.send("Hello this is EduMatch's backend")
})

app.post('/insert', (req, res) => {
    const { name, id, type, password } = req.query;
    let qry = 'select * from users where id = "' + id + '"'
    connection.query(qry, (err, result, fields) => {
        if (isEmpty(result)) {
            qry = 'insert into users values ("' + name + '", ' + id + ', "' + type + '", "' + password + '")'
            connection.query(qry, (err, result, fields) => {
                if (err) {
                    console.log("Error in inserting")
                    res.json({ 'msg': "Error in signing up !!!" })
                }
                else {
                    res.json({ 'msg': "Successfully signed up" })
                }
            })
        }
        else {
            res.json({ 'msg': "User Exists !!!" })
        }
    })
})


app.listen(port, () => {
    console.log("Server is runing")
})