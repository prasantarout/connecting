let mongoose = require("mongoose");
let config = require("../config.json");

module.exports = {
    connect: function () {
      let db = mongoose
        .connect(config.dbUrl, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then((res) => console.log("database connected"))
        .catch((err) => console.log("Error while connection to DataBase", err));
      
    },
    
  };
