import con from "./dbcon";

export default function handler(req, res) {
    con.query('SELECT distinct subject FROM rating', (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });
}
