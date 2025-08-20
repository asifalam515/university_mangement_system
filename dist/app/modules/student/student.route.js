import express from "express";
import { studentController } from "./student.controller.js";
const router = express.Router();
// route will call controller function
router.post("/create-student", studentController.createStudent);
export const studentRouter = router;
//# sourceMappingURL=student.route.js.map