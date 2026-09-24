const app = require("./src/app");
const { PORT, APP_NAME } = require("./src/config/env");

app.listen(PORT, () => {
  console.log(`${APP_NAME} is running on port ${PORT}`);
});