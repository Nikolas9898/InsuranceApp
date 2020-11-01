const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const usersRouter = require("./routes/user/user");
app.use("/api/user", usersRouter);

const insuranceRouter = require("./routes/insurance/insurance");
app.use("/api/insurance", insuranceRouter);

const contractRouter = require("./routes/contract/contract");
app.use("/api/contract", contractRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
