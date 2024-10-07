import connectionDB from "@/lib/connectionDB"
import { NextResponse } from "next/server"

export async function GET(request){
    const db = await connectionDB()
    try{
        const servicesCollection=  db.collection('services')
        const result= await servicesCollection.find().toArray()
        return NextResponse.json({
            massage: "successfully service found",
            status: 200,
            success: true,
            result
        })
    }
    catch(error){
        console.log(error);
        return NextResponse.json({
            massage: "failed to provide services",
            status: 500,
            success: false,
        })
    }
}