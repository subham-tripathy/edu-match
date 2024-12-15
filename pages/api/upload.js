import multer from "multer";
import fs from "fs";
import con from "../Components/dbcon";

const upload = multer({
    storage: multer.diskStorage({
        destination: "./public/uploads/",
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        },
    }),
});

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method === "POST") {
        upload.single("video")(req, res, (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            const videoData = fs.readFileSync(req.file.path);

            con.query(
                `INSERT INTO videos (tid, video) VALUES ('${
                    req.query.tid
                }', ${videoData})`,
                (error, results) => {
                    if (error) {
                        console.error("Error inserting into database:", error);
                        return res
                            .status(500)
                            .json({ error: "Error inserting into database" });
                    }

                    // fs.unlinkSync(req.file.path); // Delete the uploaded file from the server
                    return res
                        .status(200)
                        .json({ msg: "video uploaded successfully" });
                }
            );
        });
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
