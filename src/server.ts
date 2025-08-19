import app from "./app.js";

const mongoose = require("mongoose");

try {
  main().catch((err) => console.log(err));
  async function main() {
    await mongoose.connect(process.env.DB_URL);
  }
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.POR}`);
  });
} catch (erro) {
  console.log("something went wrong while starting the app");
}
