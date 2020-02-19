const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(name, cb) {
        orm.insertOne("`burgers`", ["burger_name", "devoured"], [name, false], cb);
    },
 
    // insertOne: function(cols, vals, cb) {
    //     orm.insertOne("burgers", cols, vals, function(res) {
    //         cb(res);
    //     });
    // },

    // updateOne: function(objColVals, condition, cb) {
    //     orm.updateOne("burgers", objColVals, condition, function(res) {
    //         cb(res);
    //     });
    // }

    updateOne: function(id, cb) {
        let condition = "id=" + id;
        orm.updateOne("`burgers`", {devoured: true}, condition, cb);
    }

};

module.exports = burger;