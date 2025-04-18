import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/libs/prisma";

//получение из BD
export async function GET() {

    const users = await prisma.user.findMany();
    return NextResponse.json(users)
}


// создание в BD
export async function POST(req: NextRequest, res: NextResponse) {

    const data = await req.json();
    const user = await prisma.user.create({
        data
    })

    return NextResponse.json(user)
}