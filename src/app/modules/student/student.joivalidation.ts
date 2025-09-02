// creating a shcema validation using joi

import Joi from "joi";

// Guardian schema
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    "string.base": "Father's name must be a string",
    "any.required": "Father's name is required",
  }),
  fatherOccupation: Joi.string().required().messages({
    "any.required": "Father's occupation is required",
  }),
  fatherContactNo: Joi.string().required().messages({
    "any.required": "Father's contact number is required",
  }),
  motherName: Joi.string().required().messages({
    "any.required": "Mother's name is required",
  }),
  motherOccupation: Joi.string().required().messages({
    "any.required": "Mother's occupation is required",
  }),
  motherContactNo: Joi.string().required().messages({
    "any.required": "Mother's contact number is required",
  }),
});

// Student schema
export const studentValidationSchema = Joi.object({
  id: Joi.string().optional(),

  name: Joi.object({
    firstName: Joi.string().required().messages({
      "any.required": "First name is required",
    }),
    middleName: Joi.string().optional(),
    lastName: Joi.string().required().messages({
      "any.required": "Last name is required",
    }),
  }).required(),

  gender: Joi.string().valid("Male", "Female", "Other").required().messages({
    "any.only": "Gender must be either Male, Female, or Other",
    "any.required": "Gender is required",
  }),

  email: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email address",
    "any.required": "Email is required",
  }),

  dateOfBirth: Joi.string().optional(),

  contactNo: Joi.string().required().messages({
    "any.required": "Contact number is required",
  }),

  emergencyContactNo: Joi.string().required().messages({
    "any.required": "Emergency contact number is required",
  }),

  bloodGroup: Joi.string()
    .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
    .optional()
    .messages({
      "any.only": "{#value} is not a valid blood group",
    }),

  presentAddress: Joi.string().required().messages({
    "any.required": "Present address is required",
  }),

  pernamentAddress: Joi.string().required().messages({
    "any.required": "Permanent address is required",
  }),

  gurdian: guardianValidationSchema.required().messages({
    "any.required": "Guardian information is required",
  }),

  profileImg: Joi.string().optional(),

  isActive: Joi.string().valid("active", "blocked").default("active").messages({
    "any.only": "Status must be either active or blocked",
  }),
});
