import {Container, Filters, Title, TopBar} from "../components/shared";
import {ProductsGroupList} from "@/components/shared/products-group-list";


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
                            <ProductsGroupList categoryId={1} title={"Пиццы"} items={[
                                {
                                    id: 1,
                                    name: "Чизбургер пицца",
                                    imageUrl: "https://media.dodostatic.net/image/r:584x584/019591a2e222794a81731c99f3cc34ec.avif",
                                    price: 550,
                                    items: [{price: 550}]
                                }
                            ]}/>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}