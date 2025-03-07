import { NextResponse } from "next/server";

export async function PUT(request,{params}){
    try{
        return NextResponse.json({
            message: "custom service sucessfully",
            status: 200
        })
    }
    catch(e){
        return NextResponse.json({
            messege: "custom service error",
            status: 500,
            error: e
        })
    }
}