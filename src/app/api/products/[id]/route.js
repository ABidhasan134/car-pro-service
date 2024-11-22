import connectionDB from "@/lib/connectionDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


export  async function GET(request,{params}) {
  const db= await connectionDB();
  const productListCollection = db.collection('productsList');
  // console.log("paramiter form backend",params.id);
  try{
    const product= await productListCollection.findOne({_id:new ObjectId(params.id)})
    // console.log("product details from oneProduct",product)
    if(!product){
        return NextResponse.json({message: 'Product not found'},{status: 404})
    }
    return NextResponse.json({message: 'successfull get the product',status: 200,result: product})
  }
  catch(error){
    console.log('error getting one product',error);
  }
}


