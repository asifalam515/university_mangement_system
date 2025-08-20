import express from "express";
import cors from "cors";
import type { Application, Request, Response } from "express";
import { studentRouter } from "./app/modules/student/student.route.js";
const app: Application = express();
app.use(express.json());
app.use(cors());
// application router

app.use("/api/v1/students", studentRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
