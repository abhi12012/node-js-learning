const { loadEnvFile } = require("node:process");

loadEnvFile();

const PORT = Number(process.env.PORT) || 3000;
const APP_NAME = process.env.APP_NAME || "NodeLearning";

module.exports = {
  PORT,
  APP_NAME
};