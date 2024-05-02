import con from "../Components/dbcon"
export default function handler(req, res) {
    const { sub } = req.query
    if (sub === 'all') {
        con.query('select * from rating order by rating', (err, result, fields) => {
            res.send(result)
        })
    }
    else {
        con.query('select * from rating where subject = "' + sub + '" order by rating', (err, result, fields) => {
            res.send(result)
        })
    }
}