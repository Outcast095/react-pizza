'use client'

import React from "react"
import {Title} from "@/components/shared/title";
import {ProductCard} from "@/components/shared/product-card";
import {useIntersection} from "react-use";
import {useCategoryStore} from "@/store/category";

interface Props {
    title: string;
    categoryId: number;
    listClassName?: string;
    items: any[];
    className?: string;
}


export const ProductsGroupList: React.FC<Props> = ({title, items, categoryId, listClassName, className}) => {

    //использование библиотеки zustand
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)


    //запомнить срабатывание анимации перехода по группам при скролле страницы
    const intersectionRef = React.useRef<HTMLDivElement>(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    React.useEffect(() => {
        if(intersection?.isIntersecting) {
            setActiveCategoryId(categoryId)
        }
    }, [categoryId, intersection?.isIntersecting, title])


    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size={"lg"} className={"font-extrabold mb-5"}/>

            <div className={"grid grid-cols-3 gap-[50px]"}>
                {items.map((product ) => {
                    return (
                        <ProductCard
                            id={product.id}
                            key={product.id}
                            name={product.name}
                            price={product.items[0].price}
                            imageUrl={product.imageUrl}
                        />
                    )
                })}
            </div>
        </div>
    )
}