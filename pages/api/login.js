import con from "../Components/dbcon";

function isEmpty(obj) {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) {
            return false;
        }
    }
    return true;
}

export default function handler(req, res) {
    const { id, password } = req.query;
    con.query('select * from users where uid = "' + id + '"', (err, result, fields) => {
        if (isEmpty(result)) {
            res.send({ 'msg': 'user doesn\'t exists', })
        }
        else{
            if (password === result[0].password){
                res.send({ 'msg': 'login success', })
            }
            else{
                res.send({ 'msg': 'wrong password', })
            }
        }
    })
}