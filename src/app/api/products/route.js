import connectionDB from "@/lib/connectionDB";
import { NextResponse } from "next/server";

export async function GET(request){
    const db=await connectionDB();
    try{
        const productListcollection= db.collection('productsList')
        const result= await productListcollection.find().toArray();
        // console.log("THIS IS PRODUCTS LIST",result)
        return NextResponse.json({
            massage: "successfully service found",
            status: 200,
            success: true,
            result
        })
    }
    catch(error){
        console.log("product is not available Error:",error);
    }
}