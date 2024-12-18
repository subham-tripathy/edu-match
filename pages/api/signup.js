import con from "./dbcon";

function isEmpty(obj) {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) {
            return false;
        }
    }
    return true;
}

export default function handler(req, res) {
    if (req.method === "POST") {
        const { name, id, password, type } = req.query;
        con.query(`SELECT * FROM users WHERE id = '${id}'`, (err, result) => {
            if (result.rows == undefined || isEmpty(result.rows)) {
                con.query(
                    `INSERT INTO users (name, id, type, password) VALUES ('${name}', '${id}', '${type}', '${password}')`,
                    (err) => {
                        if (err) {
                            console.log(err);
                            return res.json({ msg: "an error occurred" });
                        }
                    }
                );

                const x = req.query;
                for (const key in x) {
                    if (Object.hasOwnProperty.call(x, key)) {
                        const element = x[key];
                        if (
                            key !== "name" &&
                            key !== "id" &&
                            key !== "password" &&
                            key !== "type"
                        ) {
                            con.query(
                                `INSERT INTO rating (tid, subject, rating, no_of_ratings) VALUES ('${id}', '${element.toLowerCase()}', 0, 0)`,
                                (err) => {
                                    if (err) {
                                        console.log(err);
                                        res.json({ msg: "an error occurred" });
                                    }
                                }
                            );
                        }
                    }
                }

                res.json({ msg: "signup success" });
            } else {
                res.json({ msg: "user exists" });
            }
        });
    } else {
        res.json({ msg: "request method error" });
    }
}
