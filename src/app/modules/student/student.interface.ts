import { Schema, model, connect } from "mongoose";

// create type of student
export type gurdianType = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type Student = {
  id: string;
  name: {
    firstName: string;
    middleName?: string | undefined;
    lastName: string;
  };
  gender: "Male" | "Female" | "Other";
  email: string;
  dateOfBirth: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?:
    | "A+"
    | "A-"
    | "B+"
    | "B-"
    | "AB+"
    | "AB-"
    | "O+"
    | "O-"
    | undefined;
  presentAddress: string;
  pernamentAddress: string;
  gurdian: gurdianType;
  profileImg?: string | undefined;
  isActive: "active" | "blocked";
};
