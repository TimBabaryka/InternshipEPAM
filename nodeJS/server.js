import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import "dotenv/config";
import cloudRouter from "./cloud/cloudRouter.js";
const port = process.env.PORT || 3222;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/cloud", cloudRouter);

async function startApp() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(port, () => console.log(`Working on server ${port}`));
  } catch (e) {
    console.log(e);
  }
}

startApp();
