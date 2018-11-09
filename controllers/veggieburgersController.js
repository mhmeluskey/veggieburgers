var express = require("express");

var router = express.Router();

var veggieburger = require("../models/veggieburger.js");

router.get("/", function (req, res) {
  veggieburger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});



router.post("/api/veggieburgers", function (req, res) {
  veggieburger.create([
    "type", "ate"
  ], [
      req.body.type, req.body.ate
    ], function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

router.put("/api/veggieburgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log(condition)
  console.log("condition", condition);
  console.log(req.body);

  if (req.body.ate === "true") {
    req.body.ate = false;
  } else {
    req.body.ate = true;

  }
  console.log(req.body.ate);
  veggieburger.update({
    ate: req.body.ate
  }, condition, function (result) {
    console.log(result);
    if (result.changedRows == 0) {
      console.log("hello")
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/veggieburgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  veggieburger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });

});











module.exports = router;