import { Schema, model, connect } from "mongoose";
const GuardianSchema = new Schema({
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNo: { type: String, required: true },
}, { _id: false } // 👈 prevents creating an extra _id for the subdocument
);
const studentSchema = new Schema({
    id: { type: String },
    name: {
        firstName: String,
        middleName: String,
        lastName: String,
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    dateOfBirth: String,
    contactNo: String,
    emergencyContactNo: String,
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required: false,
    },
    presentAddress: String,
    pernamentAddress: String,
    gurdian: GuardianSchema,
    profileImg: { type: String, required: false },
    isActive: {
        type: String,
        enum: ["active", "blocked"],
    },
});
// create a model
export const StudentModel = model("Student", studentSchema);
//# sourceMappingURL=student.model.js.map