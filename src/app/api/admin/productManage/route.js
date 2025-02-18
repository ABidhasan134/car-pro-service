import connectionDB from "@/lib/connectionDB";
import { NextResponse } from "next/server";

export async function PUT(request,{param}){
    const db= await connectionDB();
    try{
        return NextResponse.json({
            message: "product update successfully",
            status: 200
        })
    }
    catch(e){
       return NextResponse.json({
        message:"product is not updated",
        status: 500
       })
    }
}