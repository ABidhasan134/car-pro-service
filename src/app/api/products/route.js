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
        // console.log("product is not available Error:",error);
        return NextResponse.json({message:"product is not available Error",error})
    }
}
export async function POST(req) {
    try {
      const db = await connectionDB();
      const body = await req.json();
      console.log(body)
      if (!body.productId || !body.name || !body.price) {
        return NextResponse.json({ message: 'Missing required fields', status: 400 });
      }
  
      const productCollection = db.collection('productsList');
      const existingProduct = await productCollection.findOne({ productId: body.productId });
  
      if (existingProduct) {
        return NextResponse.json({ message: 'Product already exists', status: 409 });
      }
  
      const result= await productCollection.insertOne(body);
  
      return NextResponse.json({ message: 'Product added successfully', status: 201, result });
    } catch (error) {
      console.log(error)
      return NextResponse.json({ message: 'Error creating product', status: 500 });
    }
  }
  