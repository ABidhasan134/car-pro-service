import connectionDB from "@/lib/connectionDB";
import { NextResponse } from "next/server";

export async function PUT(request,{params}){
    const db= await connectionDB();
    const body=await request.json();
    const filter={email:params.email}
    try{
        const userCollection= db.collection('users');
        const bookingStatus=body.bookingStatus;
        const user=await userCollection.findOne(filter);
        const updateInfo={
            customservices:[
             bookingStatus
            ]
        }
        const result= await userCollection.updateOne(filter,{$set:updateInfo})
        console.log(result);
        return NextResponse.json({
            message: "custom service sucessfully",
            status: 200,
            result
        })
    }
    catch(e){
        console.log("this error from custo service",e)
        return NextResponse.json({
            messege: "custom service error",
            status: 500,
            error: e
        })
    }
}