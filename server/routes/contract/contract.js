const router = require("express").Router();
let Contract = require("../../models/contract/contract.model");
let User = require("../../models/user/user.model");
let Insurance = require("../../models/insurance/insurance.model");
// router.route("/").get((req, res) => {
//   User.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

router.route("/create").post(async (req, res) => {
  const customerId = req.body.customerId;
  const insuranceId = req.body.insuranceId;
  const details = req.body.details;
  const finalPrice = req.body.finalPrice;

  let customer = {};
  let insurance = {};

  await User.find({ _id: customerId }).then((customers) => {
    customer = {
      id: customers[0]._id,
      username: customers[0].username,
      email: customers[0].email,
      type: customers[0].type,
    };
  });

  await Insurance.find({ _id: insuranceId }).then((insurances) => {
    insurance = {
      id: insurances[0]._id,
      name: insurances[0].name,
      type: insurances[0].type,
      price: insurances[0].price,
    };
  });

  newContract = new Contract({
    customer,
    insurance,
    customerId,
    details,
    finalPrice,
  });

  newContract
    .save()
    .then(() => res.json(newContract))
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.route("/").get((req, res) => {
  Contract.find()
    .then((contracts) => res.json(contracts))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  Contract.findByIdAndDelete(req.params.id)
    .then(() => res.json("Contract deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/getByCustomerId/:id").get((req, res) => {
  Contract.find({ customerId: req.params.id })
    .then((contracts) => {
      res.json(contracts);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
