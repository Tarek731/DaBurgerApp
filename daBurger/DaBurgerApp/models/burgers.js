// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  allBurgers: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  createBurger: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  }
  // updateBurger: function("burgers", objColVals, condition, function(res) {
  //     cb(res);
  //   });
  // }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;
