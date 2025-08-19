import express from "express";
import cors from "cors";
import type { Application, Request, Response } from "express";
const app: Application = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
