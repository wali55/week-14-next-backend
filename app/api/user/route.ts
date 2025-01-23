import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    console.log(req.headers.get("authorization"));
    console.log(req.nextUrl.searchParams.get("name"));
    const user = await prisma.user.findUnique({
        where: {
            id: 1
        }
    })
    return Response.json({username: user?.username, password: user?.password});
}

export async function POST(req: NextRequest) {
    const {username, password} = await req.json();
    const user = await prisma.user.create({
        data: {
            username,
            password
        }
    })
    console.log(user.id);
    return Response.json({msg: "User created successfully"});
}