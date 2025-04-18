// Импорт необходимых типов и функций из Next.js для обработки HTTP-запросов и ответов
import { NextRequest, NextResponse } from "next/server";

// Импорт экземпляра Prisma Client для взаимодействия с базой данных
import { prisma } from "@/libs/prisma";

// Экспортируем асинхронную функцию-обработчик GET-запроса
export async function GET(req: NextRequest) {
    // Получаем параметр 'query' из строки запроса (searchParams)
    // Если параметр отсутствует, используем пустую строку как значение по умолчанию
    const query = req.nextUrl.searchParams.get('query') || "";

    // Выполняем запрос к базе данных через Prisma для получения продуктов
    const products = await prisma.product.findMany({
        // Условие фильтрации: ищем продукты, у которых имя содержит значение из 'query'
        where: {
            name: {
                contains: query, // Фильтр: имя продукта должно содержать подстроку из 'query'
                mode: "insensitive" // Игнорируем регистр при поиске (например, "Pizza" и "pizza" совпадают)
            },
        },
        take: 5 // Ограничиваем количество возвращаемых записей до 5
    });

    // Возвращаем продукты в формате JSON как ответ на запрос
    return NextResponse.json(products);
}
