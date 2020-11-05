const router = require("express").Router();
let Insurance = require("../../models/insurance/insurance.model");

// router.route("/").get((req, res) => {
//   User.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

router.route("/create").post((req, res) => {
  const name = req.body.name;
  const type = req.body.type;
  const price = req.body.price;

  newInsurance = new Insurance({
    name,
    type,
    price,
  });

  newInsurance
    .save()
    .then(() => res.json(newInsurance))
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });

  //   const username = req.body.username;
  //   const password = req.body.password;
  //   const email = req.body.email;
  //   const type = req.body.type;
  //   const newUser = new User({
  //     username,
  //     password,
  //     email,
  //     type,
  //   });
  //   let user = {
  //     username,
  //     email,
  //     type,
  //   };
  //   newUser
  //     .save()
  //     .then(() => res.json(user))
  //     .catch((err) => {
  //       res.status(400).json("Error: " + err);
  //     });
});

router.route("/").get((req, res) => {
  Insurance.find()
    .then((insurances) => res.json(insurances))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  Insurance.findByIdAndDelete(req.params.id)
    .then(() => res.json("Insurance deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:name").get((req, res) => {
  Insurance.find({ name: req.params.name })
    .then((insurance) => res.json(insurance[0]))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
