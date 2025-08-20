import express from "express";
import cors from "cors";
import { studentRouter } from "./app/modules/student/student.route.js";
const app = express();
app.use(express.json());
app.use(cors());
// application router
app.use("api/v1/students", studentRouter);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
export default app;
//# sourceMappingURL=app.js.map