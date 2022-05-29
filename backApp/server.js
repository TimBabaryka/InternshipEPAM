import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import appRouter from "./myApp/appRouter.js";
import { PORT, DB_URL } from "./config.js";
const port = PORT | 3223;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/app", appRouter);

function startApp() {
  mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      app.listen(port, () => console.log(`Working on server ${port}`));
    })
    .catch((e) => console.log(`error ${e}`));
}

startApp();
