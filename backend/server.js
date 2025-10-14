const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 1111;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});


app.get('/', (req, res) => {
    
})

app.listen(8081, ()=> {
    console.log("listening");
    
})