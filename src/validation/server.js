import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from '../utils/env';


//Для доступу до змінних оточення в середовищі Node.js використовується глобальний об'єкт process.env
const PORT = Number(env("PORT", "3000"));

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  //pino повинен бути одним з перших мідлварів, які ви додаєте до екземпляру app.
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );
  //res - другий параметр, який являє собою об’єкт для формування відповіді.
  app.get('/', (req, res) => {
    res.json({
      message: 'Hello World',
    });
  });

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Page not found',
    });
  });

  // Middleware для обробких помилок (приймає 4 аргументи)
  app.use((err, req, res, next) => {
    //метод status, щоб задати відповідний статус нашій відповіді і метод json, щоб конвертувати об’єкт у рядок
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};