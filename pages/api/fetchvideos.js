import con from "./dbcon";

export default function handler(req, res) {
    const tid = req.query.tid;
    con.query(`select * from videos where tid = '${tid}'`, (err, result) => {
        if (err) {
            res.status(500).json({ 'msg': 'Internal server error' });
        } else {
            res.status(200).json(result);
        }
    })
}
