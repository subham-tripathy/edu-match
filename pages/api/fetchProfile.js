import con from "../Components/dbcon";

export default function handler(req, res) {
    con.query('select * from users where uid = "' + req.query.id + '"', (err, result, fields) => {
        res.send(result)
    })
}
