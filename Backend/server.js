import express from "express";
import "dotenv/config";
import cors from "cors";
import { connectDataBase } from "./config/database.js";
import userRouter from "./Routes/user.routes.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
let Port = process.env.PORT;
app.get("/", (req, res) => {
  res.send(`Server is Live ...`);
});

//Custom Routes or API's ...
app.use("/api/v1", userRouter);

const runServer = async () => {
  try {
    await connectDataBase();
    app.listen(Port, () => {
      console.log(`server is live  http://localhost:${Port}`);
    });
  } catch (error) {
    console.error(`Server Crashed not listning to port no ${Port}`);
  }
};
runServer();
