// Импортируем библиотеку axios, которая используется для выполнения HTTP-запросов
import axios from 'axios';

// Экспортируем константу axiosInstance, которая представляет собой настроенный экземпляр axios
export const axiosInstance = axios.create({
    // Устанавливаем базовый URL для всех запросов, который берётся из переменной окружения
    // process.env.NEXT_PUBLICK_API_URL — это переменная окружения, обычно задаваемая в файле .env
    // Использование базового URL позволяет не указывать полный адрес API в каждом запросе
    baseURL: process.env.NEXT_PUBLICK_API_URL,
});

