import { z } from "zod";

// Guardian Schema
const guardianZodValidationSchema = z.object({
  fatherName: z.string().min(1, "Father's name is required"),
  fatherOccupation: z.string().min(1, "Father's occupation is required"),
  fatherContactNo: z.string().min(1, "Father's contact number is required"),
  motherName: z.string().min(1, "Mother's name is required"),
  motherOccupation: z.string().min(1, "Mother's occupation is required"),
  motherContactNo: z.string().min(1, "Mother's contact number is required"),
});

// Student Schema
export const studentZodValidationSchema = z.object({
  id: z.string(),

  name: z.object({
    firstName: z.string().min(1, "First name is required"),
    middleName: z.string().optional(),
    lastName: z.string().min(1, "Last name is required"),
  }),

  gender: z.enum(["Male", "Female", "Other"] as const, {
    required_error: "Gender is required",
    invalid_type_error: "Gender must be either Male, Female, or Other",
  }),

  email: z.string().email("Please provide a valid email address"),

  dateOfBirth: z.string(),

  contactNo: z.string().min(1, "Contact number is required"),

  emergencyContactNo: z.string().min(1, "Emergency contact number is required"),

  bloodGroup: z
    .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
    .optional(),

  presentAddress: z.string().min(1, "Present address is required"),

  pernamentAddress: z.string().min(1, "Permanent address is required"),

  gurdian: guardianZodValidationSchema, // nested guardian schema

  profileImg: z.string().url("Profile image must be a valid URL").optional(),

  isActive: z.enum(["active", "blocked"]).default("active"),
});

export default studentZodValidationSchema;
