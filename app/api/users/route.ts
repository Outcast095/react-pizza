// Импортируем необходимые классы из библиотеки Next.js для обработки HTTP-запросов и ответов
// NextRequest — объект для работы с входящими запросами
// NextResponse — объект для формирования ответов сервера
import { NextRequest, NextResponse } from "next/server";

// Импортируем объект prisma из пользовательской библиотеки "@/libs/prisma"
// Prisma — это ORM (Object-Relational Mapping) для работы с базой данных
// Предполагается, что prisma настроена для взаимодействия с моделью базы данных
import { prisma } from "@/libs/prisma";

// Обработчик GET-запроса для получения списка пользователей из базы данных
// Экспортируется как асинхронная функция GET
export async function GET() {
    // Используем Prisma для выполнения запроса к базе данных
    // findMany() возвращает все записи из таблицы user
    const users = await prisma.user.findMany();

    // Возвращаем ответ в формате JSON с массивом пользователей
    // NextResponse.json автоматически устанавливает правильные заголовки (Content-Type: application/json)
    return NextResponse.json(users);
}

// Обработчик POST-запроса для создания нового пользователя в базе данных
// Принимает объект запроса (req) типа NextRequest и объект ответа (res) типа NextResponse
// Экспортируется как асинхронная функция POST
export async function POST(req: NextRequest) {
    // Извлекаем данные из тела запроса, парсим JSON
    // req.json() возвращает промис, который разрешается в объект с данными
    const data = await req.json();

    // Используем Prisma для создания новой записи в таблице user
    // Метод create принимает объект с полем data, содержащим данные для создания записи
    const user = await prisma.user.create({
        data, // Сокращенная запись для data: data
    });

    // Возвращаем созданного пользователя в формате JSON
    return NextResponse.json(user);
}