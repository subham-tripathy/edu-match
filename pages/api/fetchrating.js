import con from "./dbcon"

export default function handler(req, res) {
    const { tid } = req.query
    con.query(`select * from rating where tid = '${tid}'`, (err, result) => {
        if (err) {
            res.status(400).json({ 'msg': 'error' })
        } else {
            res.status(200).json(result)
        }
    })
}
