const express = require("express");
const app = express();
const cors = require("cors");
const { Double } = require("mongodb");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./router"));

//Mongo DB Connection
const dbo = require("./db/conn");

app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});

app.get("/test/", (req, res) => {
  res.send("Hello, World!");
});
