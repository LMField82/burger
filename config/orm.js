const connection = require("./connection");

function printQuestionMarks(num) {
    const arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    const arr = [];

    for (var key in ob) {
        const value = ob[key];

        if(Object.hasOwnProperty.call(ob, key)) {

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

let orm = {

    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}



    // selectAll: function(cb) {
    //     connection.query(`SELECT * FROM burgers`, function(err, data) {
    //         if (err) throw err;
    //         cb(data);
    //     });
    // },
    // insertOne: function(newBurger, cb) {
    //     connection.query(`INSERT INTO burgers (burger_name) VALUES ('${newBurger}')`, function(err, data) {
    //         if (err) throw err;
    //         cb(data);
    //     });
    // },
    // updateOne: function(id, cb) {
    //     connection.query(`UPDATE burgers SET devoured = TRUE WHERE id = ${id}`, function(err, res) {
    //         if (err) throw err;
    //         cb(res);
    //     });
    // }



module.exports = orm;