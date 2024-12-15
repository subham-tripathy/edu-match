import con from "../Components/dbcon"

export default function handler(req, res) {
    const { tid, uid, sub, rating } = req.query

    // if (tid === uid) {
    //     res.json({ 'msg': 'self rating' })
    // } else {
    let ratingg
    let ratingg_quantity
    con.query('select rating, no_of_ratings from rating where name = "' + tid + '" and subject = "' + sub + '"', (err, result) => {
        result = result[0]
        ratingg = parseFloat(result.rating) + parseFloat(rating)
        ratingg_quantity = parseInt(result.no_of_ratings) + 1
        con.query('UPDATE rating SET rating = ' + ratingg + ', no_of_ratings = ' + ratingg_quantity + ' WHERE subject = "' + sub + '" AND name = "' + tid + '"', (err, result) => {
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
