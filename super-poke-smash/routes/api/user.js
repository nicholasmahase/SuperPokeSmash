const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Are u able to see this while we are live coding

const db = require("./../../models");

// router.get("/", function(req, res) {
//   res.send("hello world");
// });

router.post("/login", function(req, res) {
  //Do simple error checking, no empty username etc
  db.User.findAll({
    raw: true,
    where: {
      username: req.body.user.username
    }
  })
    .then(user => {
      if (user.length > 0) {
        //CHeck password
        bcrypt
          .compare(req.body.user.password, user[0].password)
          .then(isMatch => {
            //If password is match then
            if (isMatch) {
              //   console.log(isMatch);
              //We have to encrypt the data and store it to local storage
              const payload = {
                id: user[0].id,
                username: user[0].username
              };
              //SIGN A JSON WEB TOKEN
              jwt.sign(
                payload,
                "verySecretKey",
                {
                  expiresIn: 3600 //15 mins?
                },
                (err, token) => {
                  res.status(200).json({
                    sucess: true,
                    token: "Bearer " + token
                  });
                }
              );
            } else {
              res.status(400).json({ error: "Password does not match" });
            }
          })
          .catch(isError => {
            console.error(isError);
            res.status(500);
          });
      } else {
        res.status(400).json({ error: "User not found" });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500);
    });
});

router.post("/register", function(req, res) {
  //THIS IS FOR REGISTER
  //   console.log(req.body.user);
  //Save to database
  //ERROR CHECKIGN
  //email cannot be empty something etc
  // Password limit

  db.User.findAll({
    where: {
      email: req.body.user.email,
      username: req.body.user.username
    }
  })
    .then(user => {
      //TODO DO A BETTER CHECK FOR FUTURE
      console.log(user);
      if (user.length > 0) {
        res.status(400).json({ email: "Email already in use" });
      } else {
        //Create new user
        const newUser = new db.User({
          firstname: req.body.user.firstname,
          lastname: req.body.user.lastname,
          username: req.body.user.username,
          email: req.body.user.email,
          password: req.body.user.password
        });
        //Encript, password with bycriptjs
        // console.log(newUser);
        bcrypt.genSalt(10, (err, salt) => {
          if (err) {
            throw err;
          } else {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) {
                throw err;
              } else {
                // console.log(hash);
                newUser.password = hash;
                newUser
                  .save()
                  .then(sucess => {
                    res.status(200).json(sucess);
                  })
                  .catch(err => {
                    console.error(err);
                    res.status(400).json({ error: "User faild to register" });
                  });
              }
            });
          }
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.send("Server Error");
    });
});

module.exports = router;
