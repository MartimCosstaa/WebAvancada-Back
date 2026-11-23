require("dotenv").config();

const config = {
  db: process.env.MONGO_URI,
  secret: "supersecret",
  expiresPassword: 86400,
  saltRounds: 10,
};

module.exports = config;
