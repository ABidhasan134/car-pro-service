import connectionDB from "@/lib/connectionDB";
import { NextResponse } from "next/server";

export async function POST(){
    const db= await connectionDB();
    try{
        return NextResponse.json({message: "name changed successfully", status: 200})
    }
    catch(error){
        return NextResponse.json({message: "name not changed",error})
    }
}