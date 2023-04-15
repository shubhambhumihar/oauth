const asyncHandler = require("express-async-handler");
exports.login = asyncHandler(async (req, res) => {
  res.status(200).json("login page");
});
exports.loginwithgoogle = asyncHandler(async (req, res) => {
  res.status(200).json("login google page");
});
exports.logout = asyncHandler(async (req, res) => {
  res.status(200).json("logout");
});
