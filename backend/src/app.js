import dotenv from "dotenv";
dotenv.config({ path: "./src/.env" });
import express from "express";
import { connectToSocket } from "./controllers/socketManager.js";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";
const app = express();
const uri = process.env.MONGO_URL;
const server = createServer(app);
const io = connectToSocket(server);
app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ extended: true, limit: "40kb" }));
app.use("/api/v1/users", userRoutes);
const start = async () => {
  try {
    await mongoose.connect(uri);
    console.log("mongodb connected");

    server.listen(app.get("port"), () => {
      console.log(`Listening on port ${app.get("port")}`);
    });
  } catch (err) {
    console.error("DB connection failed:", err);
    process.exit(1);
  }
};
start();
