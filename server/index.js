const express = require("express");
const mysql = require("mysql");
require("dotenv").config();

const app = express();

app.use(express.json());

const db = mysql.createPool({
  user: "root",
  host: "localhost",
  password: process.env.MYSQL_PASSWORD,
  database: "LoginSystem",
});

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO users (user, password) VALUES ('pepe', 'pelicula');";
  db.query(sqlInsert, (error, result) => {
    res.send("Hola Manu, SQL works");
  });
});

app.listen(3001, () => {
  console.log("runing server at port 3001");
});
