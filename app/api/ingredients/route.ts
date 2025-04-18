import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/libs/prisma";


//получение из BD
export async function GET() {

    const ingredients = await prisma.ingredient.findMany();
    return NextResponse.json(ingredients)
}
