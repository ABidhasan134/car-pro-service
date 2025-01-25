import connectionDB from "@/lib/connectionDB";
import { NextResponse } from "next/server";

export async function POST  (request) {
    const db=await connectionDB();

    try{
        const userCollection= db.collection("users");
        const body= await request.json();
        const filter={email:body.email}
        const user= await userCollection.findOne(filter)
        const customService= body.customInfo;
        if(!user){

            return NextResponse.json({message:"user is not found"})
        }
        let updateCustomService=user.customservices || [];
        if(Array.isArray(updateCustomService)&& updateCustomService>=10){
            updateCustomService.pop();
        }
        updateCustomService.unshift(customService)
        const updateDoc={
            $set:{customservices:updateCustomService}
        }
        const options = { upsert: true };
        const customserviceinfo= await userCollection.updateOne(filter,updateDoc,options)
        return NextResponse.json({message:"user tocuch successfully",customserviceinfo})
    }
    catch(error){
        // console.log("this is from the coustom serves backend" ,error);
        return NextResponse.json({message: "your custom service is not available",status:500})
    }
}

