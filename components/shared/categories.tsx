'use client'

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {useCategoryStore} from "@/store/category";

interface Props {
    className?: string;
}

const cats = [
    {id: 1, name: 'Пиццы'},
    {id: 2, name: 'Закуски'},
    {id: 3, name: 'Коктейли'},
    {id: 4, name: 'Кофе'},
    {id: 5, name: 'Напитки'},
    {id: 6, name: 'Десерты'},
    {id: 7, name: 'Десерты'},
    {id: 8, name: 'Комбо'},
 ];


export const Categories: React.FC<Props> = ({className}) => {

    const categoryActiveId = useCategoryStore((state) => state.activeId)
    return (
        <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
            {cats.map(({name, id}, index) => (
                <Link
                    key={index}
                    className={cn(
                        'flex items-center font-bold h-11 rounded-2xl px-5',
                        categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
                    )}
                    href={`/#${name}`}>
                    {name}
                </Link>
            ))}
        </div>
    );
};

