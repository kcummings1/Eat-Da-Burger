var connection = require("../conifg/connection");

var orm = {

    selectAll: function (callback) {

        connection.query("SELECT * FROM burgers", function (err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    updateOne: function (burgerID, callback) {
        connection.query("UPDATE burers SET ? WHERE ?", [{
                devoured: true
            }, {
                id: burgerID
            }],
            function (err, res) {
                if (err) throw err;
                callback(res);
            });
    }
};

module.exports = orm;