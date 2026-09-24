const { loadEnvFile } = require("node:process");

loadEnvFile();

const PORT = Number(process.env.PORT) || 3000;
const APP_NAME = process.env.APP_NAME || "NodeLearning";
const API_KEY = process.env.API_KEY || "";
const DB_USER = process.env.DB_USER || "";
const DB_PASSWORD = process.env.DB_PASSWORD || "";

module.exports = {
  PORT,
  APP_NAME,
  API_KEY,
  DB_USER,
  DB_PASSWORD
};