const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
const env = require("dotenv").load();

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(function(req, res, next) {
	// if the url is "signin" then proceed to that route
	// we need this because otherwise we'd run into an infinite loop
	// of redirecting to the /signin page over and over
	if(req.url.indexOf('/signin') >= 0) return next();
  if(req.url.indexOf('/signup') >= 0) return next();
	// if the user is authenticated, allow everything
	if (req.isAuthenticated()) return next();

	// for everything else, redirect to the signin route
	res.redirect("/signin");
});
app.use(express.static("public"));

//Models
var models = require("./app/models");

//Routes
var authRoute = require("./app/routes/auth.js")(app, passport);

//load passport strategies
require("./app/config/passport/passport.js")(passport, models.user);

//Sync Database
models.sequelize
  .sync()
  .then(function() {
    console.log("Nice! Database looks fine");
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
  });

app.listen(process.env.PORT || 3000, function(err) {
  if (!err) console.log("Site is live");
  else console.log(err);
});