import con from "../Components/dbcon";

export default function handler(req, res) {
    con.query(`select * from users where id = '${req.query.id}'`, (err, result, fields) => {
        res.send(result)
    })
}
