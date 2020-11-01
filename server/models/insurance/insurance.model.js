const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const insuranceSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      minlength: 3,
    },
    type: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },

    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Insurance = mongoose.model("Insurance", insuranceSchema);

module.exports = Insurance;
