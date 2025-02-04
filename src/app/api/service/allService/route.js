import connectionDB from "@/lib/connectionDB";
import { NextResponse } from "next/server";

export async function GET(){
    const db= await connectionDB()
    try{
        const servicesCollection = db.collection("services");
        const result= await servicesCollection.find().toArray();
        return NextResponse.json({message: "service get properly",result})
    }
    catch(error){
        return NextResponse.json({message: "service not found", error: error})
    }
}