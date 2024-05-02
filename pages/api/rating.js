import con from "../Components/dbcon"

export default function handler(req, res) {
    const { tid, uid, sub, rating } = req.query

    // if (tid === uid) {
    //     res.json({ 'msg': 'self rating' })
    // } else {
    let ratingg
    let ratingg_quantity
    con.query('select rating, rating_quantity from rating where name = "' + tid + '" and subject = "' + sub + '"', (err, result) => {
        result = result[0]
        ratingg = parseFloat(result.rating) + parseFloat(rating)
        ratingg_quantity = parseInt(result.rating_quantity) + 1
        con.query('UPDATE rating SET rating = ' + ratingg + ', rating_quantity = ' + ratingg_quantity + ' WHERE subject = "' + sub + '" AND name = "' + tid + '"', (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send({ 'msg': 'rated successfully' })
            }
        })

    })
    // }
}
