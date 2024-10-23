import { Schema, model } from 'mongoose';

const studentsSchema = new Schema(
  {
    name: {
      type: String, //type — вказує тип даних
      required: true, //чи є поле обов'язковим для заповнення
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ['male', 'female', 'other'], //enum — це перелік допустимих значень для поля
    },
    avgMark: {
      type: Number,
      required: true,
    },
    onDuty: {
      type: Boolean,
      required: true,
      default: false, //default — вказує значення за замовчуванням
    },
  },
  // додаткові параметри схеми
  {
    timestamps: true, //встановлює значення true, щоб автоматично створювати поля createdAt та updatedAt, які вказують на час створення та оновлення документа
    versionKey: false, //вказує, чи має бути створене поле __v для відстеження версій документу
  },
);

export const StudentsCollection = model('students', studentsSchema);
