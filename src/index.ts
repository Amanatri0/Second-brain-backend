import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter";
import contentRouter from "./routes/content";
import linkRouter from "./routes/link";
const app = express();

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/content", contentRouter);
app.use("/api/v1/link", linkRouter);

async function main() {
  await mongoose.connect(process.env.MONGO_URL as string);
  app.listen(3000);
}

main();
