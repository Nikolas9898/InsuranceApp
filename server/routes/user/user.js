const router = require("express").Router();
let User = require("../../models/user/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/sign-up").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const type = req.body.type;

  const newUser = new User({
    username,
    password,
    email,
    type,
  });

  let user = {
    username,
    email,
    type,
  };

  newUser
    .save()
    .then(() => res.json(user))
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.route("/:id").get((req, res) => {
  console.log(req.params);

  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
