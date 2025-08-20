import app from "./app.js";
import mongoose from "mongoose";
import "dotenv/config"; // load .env
import dotenv from "dotenv";

async function main() {
  try {
    await mongoose.connect(process.env.DB_URL as string);
    console.log("Database connected");

    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error("Error starting the app:", err);
  }
}

main();
