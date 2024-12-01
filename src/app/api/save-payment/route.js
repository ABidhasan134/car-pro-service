import connectionDB from "@/lib/connectionDB";
import { NextResponse } from "next/server";

export async function POST(request){
    const db= await connectionDB();
    const body=await request.json();

    try
    {
        console.log(body.paymentIntentId)
        console.log("here is hiting the payment server");
        return NextResponse.json({massege: "send to data base"})
    }
    catch(error)
    {
        console.log(error)
    }
}