import type { Request, Response } from "express";
import { StudentServices } from "./student.service.js";
import Joi from "joi";
import { studentValidationSchema } from "./student.joivalidation.js";
import studentZodValidationSchema from "./student.zod.validation.js";

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;
    //data validation using zod
    const zodParsedData = studentZodValidationSchema.parse(student);

    const result = await StudentServices.createStudentIntoDB(zodParsedData);

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
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getStudentFromDB(studentId as string);
    res.status(200).json({
      success: true,
      message: "Single students data retrieve",
      data: result,
    });
  } catch (error) {
    console.log("something went wrong while getting students data");
  }
};
export const studentController = {
  createStudent,
  getStudents,
  getSingleStudent,
};
