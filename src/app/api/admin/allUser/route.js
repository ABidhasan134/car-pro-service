import connectionDB from "@/lib/connectionDB";
import { NextResponse } from "next/server";

export async function GET(){
    const db= await connectionDB();
    
    try{
        const userCollection = db.collection('users')
        const result= await userCollection.find().toArray();
        // const rusult=[1,2,3,4,5,6,7,8,9]
        return NextResponse.json({
            message: "you have all user successfully",
            status: 200,
            result
        })
    }
    catch(e){
        return NextResponse.json({
            message: "error",
            status: 500
        })
    }
}