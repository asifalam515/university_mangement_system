import validator from "validator";
import { Schema, model } from "mongoose";
import type { gurdianType, Student } from "./student.interface.js";

const GuardianSchema = new Schema<gurdianType>(
  {
    fatherName: { type: String, required: [true, "Father's name is required"] },
    fatherOccupation: {
      type: String,
      required: [true, "Father's occupation is required"],
    },
    fatherContactNo: {
      type: String,
      required: [true, "Father's contact number is required"],
    },
    motherName: { type: String, required: [true, "Mother's name is required"] },
    motherOccupation: {
      type: String,
      required: [true, "Mother's occupation is required"],
    },
    motherContactNo: {
      type: String,
      required: [true, "Mother's contact number is required"],
    },
  },
  { _id: false } // prevent extra _id for subdocument
);

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    firstName: { type: String, required: [true, "First name is required"] },
    middleName: String,
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
  },
  gender: {
    type: String,
    enum: {
      values: ["Male", "Female", "Other"],
      message: "Gender must be either Male, Female, or Other",
    },
    required: [true, "Gender is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
  },
  dateOfBirth: String,
  contactNo: { type: String, required: [true, "Contact number is required"] },
  emergencyContactNo: {
    type: String,
    required: [true, "Emergency contact number is required"],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      message: "{VALUE} is not a valid blood group",
    },
  },
  presentAddress: {
    type: String,
    required: [true, "Present address is required"],
  },
  pernamentAddress: {
    type: String,
    required: [true, "Permanent address is required"],
  },
  gurdian: {
    type: GuardianSchema,
    required: [true, "Guardian information is required"],
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: {
      values: ["active", "blocked"],
      message: "Status must be either active or blocked",
    },
    default: "active",
  },
});

// create a model
export const StudentModel = model<Student>("Student", studentSchema);
