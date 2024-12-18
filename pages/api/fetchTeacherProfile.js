import con from "./dbcon";

export default function handler(req, res) {
  con.query(
    `select * from users where id = '${req.query.id}'`,
    (err, result, fields) => {
      if (err) {
        console.log(err);
        res.json({ err: err });
      } else {
        res.send(result);
      }
    }
  );
}
