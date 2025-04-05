import {Container, Filters, Title, TopBar} from "../components/shared";
import {ProductCard} from "@/components/shared/product-card";


export default function Home() {
    return (
        <>
            <Container className={"mt-10"}>
                <Title text={"Все пиццы"} size={"lg"} className={"font-extrabold"}/>
            </Container>
            <TopBar/>

            <Container className={"mt-10 pb-14"}>
                <div className={"flex gap-[60px]"}>
                    <div className={"w-[250px]"}>
                        <Filters/>
                    </div>

                    <div className={"flex-1"}>
                        <div  className={"flex flex-col gap-16"}>
                            <ProductCard id={0} name={"Баварская"} price={500} imageUrl={"https://media.dodostatic.net/image/r:584x584/019591a2e222794a81731c99f3cc34ec.avif"}/>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}