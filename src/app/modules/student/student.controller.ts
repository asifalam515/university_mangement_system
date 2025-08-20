import type { Request, Response } from "express";
import { StudentServices } from "./student.service.js";

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;

    //   will call service funciton to send this data
    const result = await StudentServices.createStudentIntoDB(student);
    res.status(200).json({
      success: true,
      message: "A student has been created",
      data: result,
    });
  } catch (error) {
    console.log("something went wrong in controller ", error);
  }
};
const getStudents = async (req: Request, res: Response) => {
  try {
    const students = req.body;
    const result = await StudentServices.getStudentsFromDB();
    res.status(200).json({
      success: true,
      message: "All students data retrieve",
      data: result,
    });
  } catch (error) {
    console.log("something went wrong while getting students data");
  }
};
export const studentController = { createStudent, getStudents };
