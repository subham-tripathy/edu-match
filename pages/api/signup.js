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
    if (req.method === 'POST') {
        const { name, id, password, type } = req.query;
        con.query('select * from users where uid = "' + id + '"', (err, result, fields) => {
            if (isEmpty(result)) {
                let qry = "insert into users values('" + name + "', '" + id + "', '" + type + "', '" + password + "')";
                con.query(qry, (err, result, fields) => { })

                const x = req.query
                for (const key in x) {
                    if (Object.hasOwnProperty.call(x, key)) {
                        const element = x[key];
                        if (key === 'name') { }
                        else if (key === 'id') { }
                        else if (key === 'password') { }
                        else if (key === 'type') { }
                        else {
                            let qry = 'insert into rating (name, subject, rating) values ("' + id + '", "' + element + '", 0)'
                            con.query(qry, (err, result, fields) => { })
                        }
                    }
                }

                res.json({ 'msg': "signup success" })
            }
            else {
                res.json({ 'msg': "user exists" })
            }
        })
    }
    else {
        res.json({ 'msg': "request method error" })
    }



























}