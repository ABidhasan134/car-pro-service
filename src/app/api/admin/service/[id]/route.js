import connectionDB from "@/lib/connectionDB"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server"

export async function DELETE(request,{params}){
    const db= await connectionDB()
    try{
        const servicesCollection = db.collection("services");
        const filter={_id: new ObjectId(params.id)}
        const result= servicesCollection.deleteOne(filter)
        console.log(result)
        return NextResponse.json({
            message: "Delete successfully",
            status: 200,
            result
        })
    }
    catch(error){
        console.log(error)
        return NextResponse.json({
            message: "Error deleting",
            status: 500, 
            error
        })
    }
}