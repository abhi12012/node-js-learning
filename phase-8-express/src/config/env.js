const { loadEnvFile } = require("node:process");

loadEnvFile();

const PORT = Number(process.env.PORT) || 3000;

module.exports = {
  PORT
};