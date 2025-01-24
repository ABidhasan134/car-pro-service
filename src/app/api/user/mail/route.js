import { NextResponse } from "next/server"

export async function  POST(request){
    const body= await request.json();
    console.log(body)
    try{
        return NextResponse.json({
            message:"mail sent successfully",
            status:200
        })
    }
    catch(error){
        console.log("email not sent", error)
    }
}