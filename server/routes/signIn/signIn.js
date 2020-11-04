const router = require("express").Router();
let User = require("../../models/user/user.model");
let jwt = require("jsonwebtoken");
// let config = require('../config');
router.route("/").post((req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (user && user.password === req.body.password) {
        const { _id, username, email, type, createdAt, updatedAt } = user;

        const token = jwt.sign(
          {
            id: user._id,
            username: user.username,
          },
          "somesecretkeyforjsonwebtoken"
        );

        let foundUser = {
          id: _id,
          username,
          email,
          type,
          createdAt,
          updatedAt,
        };

        res.json({ foundUser, token });
      } else {
        res.json({ errorMSG: "Wrong email or password" });
      }
    })
    .catch((err) => {
      res.status(400).json("Error", err);
    });
});

module.exports = router;
