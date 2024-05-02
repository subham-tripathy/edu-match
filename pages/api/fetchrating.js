import con from "../Components/dbcon"

export default function handler(req, res) {
    const { tid } = req.query
    con.query('select * from rating where name = ?', [tid], (err, result) => {
        if (err) {
            res.status(400).json({ 'msg': 'error' })
        } else {
            res.status(200).json(result)
        }
    })
}
