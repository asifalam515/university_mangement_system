import { StudentServices } from "./student.service.js";
const createStudent = async (req, res) => {
    try {
        const student = req.body;
        //   will call service funciton to send this data
        const result = await StudentServices.createStudentIntoDB(student);
        res.status(200).json({
            success: true,
            message: "A student has been created",
            data: result,
        });
    }
    catch (error) {
        console.log("something went wrong in controller ", error);
    }
};
export const studentController = { createStudent };
//# sourceMappingURL=student.controller.js.map