const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { db } = require("./model/dbConnection");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//read
app.get("/mart/pembelian", (req, res) => {
    const sqlQuery = "SELECT * FROM pembelian";
    db.query(sqlQuery, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });
  

//create
app.post("/mart/createPembelian", (req, res) => {
    const pembelianName = req.body.pembelian_name;
    const pembelianIdvendor = req.body.pembelian_idvendor;
    const pembelianDate = req.body.pembelian_date;
    const pembelianNote = req.body.pembelian_note;
  
    const sqlQuery =
      "INSERT INTO vendor (pembelian_name, pembelian_idvendor, pembelian_date, pembelian_note) VALUES (?, ?, ?, ?)";
    db.query(sqlQuery, [pembelianName, pembelianIdvendor, pembelianDate, pembelianNote], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });


//update
app.put("/mart/updatePembelian", (req, res) => {
    const pembelianId = req.body.pembelian_id;
    const pembelianName = req.body.pembelian_name;
    const pembelianIdvendor = req.body.pembelian_idvendor;
    const pembelianDate = req.body.pembelian_date;
    const pembelianNote = req.body.pembelian_note;
  
    const sqlQuery =
      "UPDATE pembelian set pembelian_name=?, pembelian_idvendor=?, pembelian_date=?, pembelian_note=? WHERE pembelian_id = ?";
    db.query(sqlQuery, [pembelianName, pembelianIdvendor, pembelianDate, pembelianNote, pembelianId], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });  

//deleted
app.delete("/mart/deletePembelian", (req, res) => {
    const pembelianId = req.body.pembelian_id;

    const sqlQuery = "DELETE FROM pembelian WHERE pembelian_id = ?";
    db.query(sqlQuery, pembelianId, (err, result) => {
        if (err) {
        console.log(err);
        } else {
        res.send(result);
        console.log(result);
        }
    });
});  


app.listen(3000, () => {
    console.log("server berhasil");
});

  