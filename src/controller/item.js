const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { db } = require("./model/dbConnection");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//read
app.get("/mart/item", (req, res) => {
    const sqlQuery = "SELECT * FROM item";
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
app.post("/mart/createItem", (req, res) => {
    const itemName = req.body.item_name;
    const itemType = req.body.item_type;
    const itemIdgroup = req.body.item_idgroup;
    const itemIdvendor = req.body.item_idvendor;
    const itemBarcode1 = req.body.item_barcode1;
    const itemBarcode2 = req.body.item_barcode2;
    const itemIdsatuan = req.body.item_idsatuan;
    const itemIditemlink = req.body.item_iditemlink;
    const itemLinkstock = req.body.item_linkstock;
    const itemStock = req.body.item_stock;
    const itemModal = req.body.item_modal;
    const itemPrice1 = req.body.item_price1;
    const itemPrice2 = req.body.item_price2;
    const itemPrice3 = req.body.item_price3;
    

    
  
    const sqlQuery =
      "INSERT INTO vendor (item_name, item_type, item_idgroup, item_idvendor, item_barcode1, item_barcode2, item_idsatuan, item_iditemlink, item_linkstock, item_stock, item_modal, item_price1, item_price2, item_price3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)";
    db.query(sqlQuery, [itemName, itemType, itemIdgroup, itemIdvendor,itemBarcode1,itemBarcode2,itemIdsatuan,itemIditemlink,itemLinkstock,itemStock,itemModal,itemPrice1,itemPrice2,itemPrice3], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });


//update
app.put("/mart/updateItem", (req, res) => {
    const itemId = req.body.item_id;
    const itemName = req.body.item_name;
    const itemType = req.body.item_type;
    const itemIdgroup = req.body.item_idgroup;
    const itemIdvendor = req.body.item_idvendor;
    const itemBarcode1 = req.body.item_barcode1;
    const itemBarcode2 = req.body.item_barcode2;
    const itemIdsatuan = req.body.item_idsatuan;
    const itemIditemlink = req.body.item_iditemlink;
    const itemLinkstock = req.body.item_linkstock;
    const itemStock = req.body.item_stock;
    const itemModal = req.body.item_modal;
    const itemPrice1 = req.body.item_price1;
    const itemPrice2 = req.body.item_price2;
    const itemPrice3 = req.body.item_price3;
  
    const sqlQuery =
      "UPDATE pembelian set item_name=?, item_type=?, item_idgroup=?, item_idvendor=?, item_barcode1=?, item_barcode2=?, item_idsatuan=?, item_iditemlink=?, item_linkstock=?, item_stock=?, item_modal=?, item_price1=?, item_price2=? , item_price3=?  WHERE item_id = ?";
    db.query(sqlQuery, [itemName, itemType, itemIdgroup, itemIdvendor,itemBarcode1,itemBarcode2,itemIdsatuan,itemIditemlink,itemLinkstock,itemStock,itemModal,itemPrice1,itemPrice2,itemPrice3, itemId], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });  

//deleted
app.delete("/mart/deleteItem", (req, res) => {
    const itemId = req.body.item_id;

    const sqlQuery = "DELETE FROM pembelian WHERE pembelian_id = ?";
    db.query(sqlQuery, itemId, (err, result) => {
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

  