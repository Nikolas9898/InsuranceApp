const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contractSchema = new Schema(
  {
    customer: {
      type: Object,
      required: true,
    },
    insurance: {
      type: Object,
      required: true,
    },
    customerId: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },

    details: {
      type: String,
      required: true,
    },

    finalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Contract = mongoose.model("Contract", contractSchema);

module.exports = Contract;
