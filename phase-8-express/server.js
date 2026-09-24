const app = require("./src/app");

const {
  PORT,
  APP_NAME,
  API_KEY,
  DB_USER,
  DB_PASSWORD
} = require("./src/config/env");


app.listen(PORT, () => {
  console.log(`${APP_NAME} is running on port ${PORT}`);
  console.log(`API key loaded: ${Boolean(API_KEY)}`);
  console.log(`DB user loaded: ${Boolean(DB_USER)}`);
console.log(`DB password loaded: ${Boolean(DB_PASSWORD)}`);
});;