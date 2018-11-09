var orm = require("../config/orm.js");


var veggieburger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            console.log("all");
            cb(res);
        })
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            console.log("created");
          cb(res);
        });
      },

      update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            console.log("updated");
          cb(res);

        });
      },
      delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            console.log("deleted");
          cb(res);
        });
      }
    };
 module.exports = veggieburger; 

