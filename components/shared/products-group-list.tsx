import React from "react"
import {Title} from "@/components/shared/title";
import {ProductCard} from "@/components/shared/product-card";

interface Props {
    title: string;
    categoryId: number;
    listClassName: string;
    items: any[];
    className?: string;
}


export const ProductsGroupList: React.FC<Props> = ({title, items, className}) => {
    return (
        <div className={className}>
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