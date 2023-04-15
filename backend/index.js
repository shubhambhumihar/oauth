const express = require("express");

const app = express();
const authRouter = require("./routes/authRoutes");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

dbConnect();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/auth", authRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000 ");
});

module.exports = app;
