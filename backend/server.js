const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json())

// const port = 1111;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});


app.post("/signup", (req, res) => {
  console.log("Received data:", req.body);
  const sql =
    "INSERT INTO login (`name`, `email`, `password`) VALUES (?, ?, ?)";
  const values = [req.body.name, req.body.email, req.body.password];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json("Error inserting data");
    } else {
      console.log("Data inserted successfully");
      return res.json("Signup successful");
    }
  });
});

app.post("/login", (req, res) => {
  console.log("Received data:", req.body);
  const sql =
    "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
  // const values = [req.body.name, req.body.email, req.body.password];

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json("Error inserting data");
    } 
    if (data.length > 0) {
      return res.json('Success')
    }
    else{
      return res.json("Failed");
    }
  });
});

app.listen(8081, ()=> {
    console.log("listening");
    
})