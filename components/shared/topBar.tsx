import React from "react"
import {cn} from "@/lib/utils";
import {Title} from "@/components/shared/title";
import {Categories} from "@/components/shared/categories";
import {SortPopup} from "@/components/shared/sortPopup";
import {Container} from "@/components/shared/container";

interface Props {
    className?: string;
}


export const TopBar: React.FC<Props> = ({className}) => {
    return (
        <div className={cn("sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10", className)}>
            <Container className={"mt-10"}>
                <Categories/>
                <SortPopup/>
            </Container>
        </div>
    )
}