
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/TaskRoute.js"

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares
app.use(cors())
app.use(express.json());

const PORT = process.env.PORT | 8800;

app.use("/api", routes);

app.listen(PORT, () => {
  connect();
  console.log(`Connected to backend at Port ${PORT}.`);
});
