import { StudentsCollection } from "../db/models/students.js";


//для отримання інформації про всіх студентів
export const getAllStudents = async () => {
    const students = await StudentsCollection.find();
    return students;
};


//для отримання інформації про одного студента за _id
export const getStudentsById = async (studentId) => {
    const student = await StudentsCollection.findById(studentId);
    return student;
};
