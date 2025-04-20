// Импорт объекта axiosInstance из модуля, содержащего настроенную конфигурацию Axios
// Предполагается, что axiosInstance — это экземпляр Axios с предустановленными настройками (например, базовый URL, заголовки)
import { axiosInstance } from "@/services/instance";

// Импорт типа Product из Prisma Client
// Product — это тип, описывающий структуру данных продукта, определенную в схеме Prisma
import { Product } from "@prisma/client";
import {ApiRoutes} from "@/services/constants";

// Экспорт асинхронной функции search, которая принимает строку query в качестве параметра
// Функция предназначена для выполнения поискового запроса к серверу
export const search = async (query: string): Promise<Product[]> => {

    // Выполнение GET-запроса с помощью axiosInstance к эндпоинту '/api/products/search'
    // В объект params передается параметр query, который будет добавлен к URL как query-параметр (например, ?query=значение)
    // Ожидается, что сервер вернет данные, соответствующие типу Product
    // Метод .data извлекает тело ответа от Axios (данные, возвращенные сервером)

    return (await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, { params: { query } })).data;
};