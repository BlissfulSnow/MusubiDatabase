import  express  from "express";
import mysql from "mysql";
import cors from "cors";


const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Myhopeis1",
    database:"beaconschema"
});


app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json("Hello this is backend.");
});


app.get("/food", (req, res) => {
    const q = "SELECT * FROM food";
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
});


app.post("/food", (req, res) => {
    const q = "INSERT INTO food (`FOOD_NAME`, `FOOD_DESC`, `DATA_SOURCE`) VALUES (?)";
    const values = [
         req.body.FOOD_NAME,
         req.body.FOOD_DESC,
         req.body.DATA_SOURCE,
    ];

    db.query(q, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json("Food Has Been Added");
    });
});


// app.delete("/food/:foodID", (req, res) => {
//     const fID = req.params.foodID;
//     const q = "DELETE FROM food WHERE foodID = ?"

//     db.query(q, [fID], (err, data) => {
//         if(err) return res.json(err);
//         return res.json("Food Has Been Deleted!");
//     });
// });


app.listen(8080, () =>{
    console.log("Connected!");
});