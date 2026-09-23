const app = require("./src/app");

const { PORT } = require("./src/config/env");

app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});;