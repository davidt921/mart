const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { db } = require("./model/dbConnection");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//read
app.get("/mart/vendor", (req, res) => {
    const sqlQuery = "SELECT * FROM vendor";
    db.query(sqlQuery, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });

  //read where
app.get("/mart/vendor/:vendor_id", (req, res) => {
  const vendorId = req.body.vendor_id;

  const sqlQuery = "SELECT * FROM user WHERE vendor_id = ?";
  db.query(sqlQuery, vendorId, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});
  

//create
app.post("/mart/createVendor", (req, res) => {
    const vendorName = req.body.vendor_name;
    const vendorNumber = req.body.vendor_number;
    const vendorAddress = req.body.vendor_address;
    const vendorAdmin = req.body.vendor_admin;
  
    const sqlQuery =
      "INSERT INTO vendor (vendor_name, vendor_number, vendor_address, vendor_admin) VALUES (?, ?, ?)";
    db.query(sqlQuery, [vendorName, vendorNumber, vendorAddress, vendorAdmin], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });


//update
app.put("/mart/updateVendor", (req, res) => {
    const vendorId = req.body.vendor_id;
    const vendorNumber = req.body.vendor_number;
    const vendorAddress = req.body.vendor_address;
    const vendorAdmin = req.body.vendor_admin;
  
    const sqlQuery =
      "UPDATE user set vendor_number=?, vendor_address=?, vendor_admin=? WHERE vendor_id = ?";
    db.query(sqlQuery, [vendorNumber, vendorAddress, vendorAdmin, vendorId], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });  

//deleted
app.delete("/mart/deleteVendor", (req, res) => {
    const vendorId = req.body.vendor_id;

    const sqlQuery = "DELETE FROM vendor WHERE vendor_id = ?";
    db.query(sqlQuery, vendorId, (err, result) => {
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

  