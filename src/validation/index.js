import { startServer } from "./server.js";
import { initMongoDB } from "../db/initMongoDB.js";

const bootstrap = async () => {
    await initMongoDB();
    startServer();
};

bootstrap();


// // Middleware для логування часу запиту
// app.use((req, res, next) => {
//   console.log(`Time: ${new Date().toLocaleString}`);
// });


// // Вбудований у express middleware для обробки (парсингу) JSON-даних у запитах
// // наприклад, у запитах POST або PATCH
// app.use(express.json());


// // Маршрут для обробки GET-запитів на '/'
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World',
//     });
// });

// // Middleware для обробких помилок (приймає 4 аргументи)
// app.use((err, req, res, next) => {
//     res.status(500).json({
//       //метод status, щоб задати відповідний статус нашій відповіді і метод json, щоб конвертувати об’єкт у рядок
//       message: 'Something went wrong!',
//     });
// });

// app.use('*', (req, res, next) => {
//     res.status(404).json({
//         message: 'Route is not found',
//     });
// });

// app.use((err, req, res, next) => {
//     res.status(500).json({
//         message: 'something went wrong',
//         error: err.message,
//     });
// });
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


