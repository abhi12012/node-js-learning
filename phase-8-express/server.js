
const app = require("./src/app");
const connectDatabase = require("./src/config/database");

const {
  PORT,
  APP_NAME,
  API_KEY,
  DB_USER,
  DB_PASSWORD,
  MONGODB_URI
} = require("./src/config/env");

async function startServer() {
  try {
    await connectDatabase();

    app.listen(PORT, () => {
      console.log(`${APP_NAME} is running on port ${PORT}`);
      console.log(`API key loaded: ${Boolean(API_KEY)}`);
      console.log(`DB user loaded: ${Boolean(DB_USER)}`);
      console.log(`DB password loaded: ${Boolean(DB_PASSWORD)}`);
    });

  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
}

startServer();
