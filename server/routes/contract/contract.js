const router = require("express").Router();
let Contract = require("../../models/contract/contract.model");

// router.route("/").get((req, res) => {
//   User.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

router.route("/create").post((req, res) => {
  const customerId = req.body.customerId;
  const insuranceId = req.body.insuranceId;
  const details = req.body.details;
  const finalPrice = req.body.finalPrice;

  newContract = new Contract({
    customerId,
    insuranceId,
    details,
    finalPrice,
  });

  console.log(newContract);

  newContract
    .save()
    .then(() => res.json(newContract))
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

module.exports = router;
