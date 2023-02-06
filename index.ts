import axios from "axios";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

dotenv.config();
const port = process.env.PORT;

const app: Express = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/events/", async (req: Request, res: Response) => {
  const event = req.body;
  axios.post(`http://localhost:4000/events`, event);
  axios.post(`http://localhost:4001/events`, event);
  axios.post(`http://localhost:4002/events`, event);

  res.send({ status: "OK" });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
