const { response } = require("express");
const express = require("express");
const router = express.Router();
const dbo = require("./db/conn");
const ObjectId = require("mongodb").ObjectId;

//GET
router.route("/record").get((req, res) => {
  let db_conn = dbo.getDb("list");
  db_conn
    .collection("records")
    .find({})
    .toArray((err, results) => {
      if (err) throw err;
      res.json(results);
    });
});

//ADD
router.route("/record/add").post((req, response) => {
  let db_conn = dbo.getDb();
  console.log("BODY:")
  console.log(req.body);
  let obj = {
    taskName: req.body.taskName,
  };
  db_conn.collection("records").insertOne(obj, (err, res) => {
    if (err) throw err;
    response.json(res);
  });
});

module.exports = router;