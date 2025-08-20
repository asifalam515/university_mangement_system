import express from "express";
import { studentController } from "./student.controller.js";
const router = express.Router();
// route will call controller function
router.post("/create-student", studentController.createStudent);
router.get("/", studentController.getStudents);
router.get("/:studentId", studentController.getSingleStudent);

export const studentRouter = router;
