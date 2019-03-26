const express = require("express");
const db = require("./models"); //Loads index.js
const routes = require("./routes");
const bodyParser = require("body-parser");


let PORT = process.env.PORT || 3004;
let app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/client/build"));

      app.use(routes)

      db.sequelize.sync().then(() => {
        app.listen(PORT, () => {
          console.log(`App is listening on ${PORT}`);
        });
      });