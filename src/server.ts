import { app } from "./app.js";

const mongoose = require("mongoose");
const port = 3000;
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL);
}
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.POR}`);
});
