import type { Student } from "./student.interface.js";
import { StudentModel } from "./student.model.js";

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
const getStudentsFromDB = async () => {
  const reuslt = await StudentModel.find();
  return reuslt;
};
export const StudentServices = {
  createStudentIntoDB,
  getStudentsFromDB,
};
