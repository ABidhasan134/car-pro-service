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

export async function POST(request, { params }) {
  const db = await connectionDB();
  const body = await request.json();

  const filter = { _id: new ObjectId(params.id) };

  try {
    const productListCollection = db.collection('productsList');
    const product = await productListCollection.findOne(filter);

    if (!product) {
      return NextResponse.json({ message: 'Product not found', status: 404 });
    }

    const quantityUser = body.quantity;
    const newQuantity = product.quantity - quantityUser;

    // Ensure the quantity doesn't go below zero
    if (newQuantity < 0) {
      return NextResponse.json({
        message: 'Insufficient stock',
        status: 400,
      });
    }

    const updateDoc = {
      $set: {
        quantity: newQuantity,
      },
    };

    const result = await productListCollection.updateOne(filter, updateDoc);
    console.log(result)
    return NextResponse.json({
      message: 'Successfully updated product quantity',
      status: 200,
      result:result,
    });
  } catch (error) {
    console.error('Error updating product quantity:', error);
    return NextResponse.json({
      message: 'An error occurred while updating the product',
      status: 500,
    });
  }
}
