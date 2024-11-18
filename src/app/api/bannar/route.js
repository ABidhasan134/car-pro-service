import connectionDB from "@/lib/connectionDB";
import { NextResponse } from "next/server";

export async function GET(){
    const db= await connectionDB();
    try{
        const bannarCollection = db.collection('bannar')
        const result= await bannarCollection.find().toArray();
        return NextResponse.json({
            massage: "successfully service found",
            status: 200,
            success: true,
            result
        })
    }
    catch(error){
        console.log("Bannar data error: ", error)
    }
}