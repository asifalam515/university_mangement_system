import type { Student } from "./student.interface.js";
export declare const StudentServices: {
    createStudentIntoDB: (student: Student) => Promise<import("mongoose").Document<unknown, {}, Student, {}, {}> & Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
};
//# sourceMappingURL=student.service.d.ts.map