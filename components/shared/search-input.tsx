'use client';

import { Search } from 'lucide-react';
import React, {useState} from 'react';
// Импортируем хук useClickAway из библиотеки react-use
// Он позволяет отслеживать клики вне указанного элемента
import {useClickAway, useDebounce} from "react-use";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {Api} from "@/services/api-client";
import {Product} from "@prisma/client";



export const SearchInput = () => {

    // Состояние `focused` для отслеживания, находится ли поле ввода в фокусе.
    // По умолчанию false (поле не в фокусе).
    const [focused, setFocused] = useState(false);

    // Состояние `searchQuery` для хранения текущего поискового запроса, введённого пользователем.
    const [searchQuery, setSearchQuery] = useState('');

    // Состояние `products` для хранения массива продуктов, полученных из API в результате поиска.
    const [products, setProducts] = useState<Product[]>([]);



    // Создаем ref для привязки к элементу input (или его контейнеру)
    // Используется для отслеживания кликов вне этого элемента
    const ref = React.useRef<HTMLInputElement>(null);


    // Используем хук useClickAway
    // Когда пользователь кликает вне элемента, привязанного к ref, сбрасываем focused в false
    useClickAway(ref, () => {
        setFocused(false);
    });



    // Использует хук useDebounce для выполнения поискового запроса с задержкой 250 мс.
    // Это предотвращает отправку запросов к API при каждом изменении текста в поле ввода.
    // Зависимость [searchQuery] означает, что хук срабатывает при изменении поискового запроса.
    useDebounce(() => {
        // Вызывает метод Api.products.search для получения продуктов по поисковому запросу,
        // затем обновляет состояние `products` полученными данными.
        Api.products.search(searchQuery).then((items) => {
            setProducts(items);
        });
    }, 250, [searchQuery]);



    // Функция, вызываемая при клике на элемент в выпадающем списке.
    // Сбрасывает состояние фокуса, очищает поисковый запрос и список продуктов.
    const onClickItem = () => {
        setFocused(false);
        setSearchQuery('');
        setProducts([]);
    };


    return (
        <>
            {/* Если focused === true, рендерим затемняющий фон (оверлей) */}
            {/* Этот div покрывает весь экран полупрозрачным черным фоном (z-30 для наложения поверх других элементов) */}
            {focused && (
                <div className={"fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30"} />
            )}

            <div ref={ref} className="flex rounded-2xl flex-1 justify-between relative h-11 z-30">
                <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
                <input
                    className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
                    type="text"
                    placeholder="Найти пиццу..."
                    // При фокусе на инпуте устанавливаем focused в true
                    onFocus={() => setFocused(true)}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                { products.length > 0 && (
                    /* Выпадающее меню с результатами поиска */
                    /* Абсолютно позиционировано под инпутом, скрыто по умолчанию (invisible, opacity-0) */
                    <div className={cn('absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-50',
                    focused && 'visible opacity-100 top-12',)}> {/* При focused = true показываем меню */}

                    {products.map((product) => {
                            return (
                                <Link className={"flex items-center gap-5 w-full px-3 py-2 hover:bg-primary/10 cursor-pointer"}
                                      href={`/product/${product.id}`}
                                      onClick={onClickItem}
                                >
                                    <img className={'rounded-sm s-8 w-8'} src={product.imageUrl} alt={product.name} />
                                    <span>{product.name}</span>
                                </Link>
                            )
                })}
            </div>
            )
                }
            </div>
        </>
    );
};