const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

// router.get("/", function(req, res) {
//     burger.selectAll(function(data) {
//         res.render("index", { burgers: data });
//     });
// });

// router.post("/api/burgers", function(req, res) {
//     burger.insertOne(req.body.burger_name, function(data) {
//         res.json({ id: res.insertId });
//     });
// });

// router.put("/api/burgers/:id", function(req, res) {
//     burger.updateOne(req.params.id, function(data) {
//         if (data.changeedRows == 0) {
//             return res.status(404);
//         }
//     });
// });


router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", { burgers: data })
    });
});

// router.post("/api/burgers", function(req, res) {
//     burger.insertOne([
//         "burger_name"
//     ], 
//     [
//         req.body.burger_name
//     ], 
//         function(result) {
//             console.log(result)
//             res.json({ id: result.insertId });
//     });
// });



router.post("/api/burgers", function(req, res) {
    // takes the request object using it as input for burger.addBurger
    burger.insertOne(req.body.burger_name, function(result) {
      // wrapper for orm.js that using MySQL insert callback will return a log to console,
      // render back to index with handle
      console.log(result);
      res.redirect("/");
    });
});  

// router.put("/burgers/:id", function(req, res) {
//     let condition = "id = " + req.params.id;
    
//     burger.updateOne({
//         devoured: true
//     }, condition, function(data) {
//         res.redirect("/");
//     });
   
//     console.log("condition", condition)
// });

router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne(req.params.id, function(result) {
      // wrapper for orm.js that using MySQL update callback will return a log to console,
      // render back to index with handle
      console.log(result);
      // Send back response and let page reload from .then in Ajax
      res.sendStatus(200);
    });
}); 

module.exports = router;