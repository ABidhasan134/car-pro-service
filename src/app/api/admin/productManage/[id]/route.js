import connectionDB from "@/lib/connectionDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const db= await connectionDB();
    
    try{
        const body= await request.json();
        const productCollection = await db.collection('productsList')
        const id= params.id;
        const filter={_id: new ObjectId(id)};
        const result= await productCollection.updateMany(filter,{$set:body})
        console.log(result)
        return NextResponse.json({
            message: "product update successfully",
            status: 200,
            result
        })
    }
    catch(e){
       return NextResponse.json({
        message:"product is not updated",
        status: 500
       })
    }
}