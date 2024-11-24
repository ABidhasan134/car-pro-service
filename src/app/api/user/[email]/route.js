import connectionDB from "@/lib/connectionDB";
import { NextResponse } from "next/server";

export async function POST(request,{params}){
    const db= connectionDB();
    const body=await request.json();
    try{
        console.log(params.userEmail)
        return NextResponse.json({
            massege: "success",
        })
    }
    catch(error){
        console.log("here is the error",error)
    }
}