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
  const { mode, quantity } = body;
  console.log("quantity from the route",quantity);
  try {
    const productListCollection = db.collection("productsList");
    const product = await productListCollection.findOne(filter);

    if (!product) {
      return NextResponse.json({ message: "Product not found", status: 404 });
    }

    // Validate input quantity
    if (quantity < 0) {
      return NextResponse.json({
        message: "Quantity must be greater than zero",
        status: 400,
      });
    }

    // Determine new quantity based on mode
    let newQuantity = product.quantity;
    if (mode === "increase") {
      newQuantity = newQuantity-1; // Reduce stock
    } else if (mode === "decrease") {
      newQuantity=newQuantity+1; // Increase stock
    } 
    else {
      return NextResponse.json({
        message: "Invalid mode. Use 'increase' or 'decrease'.",
        status: 400,
      });
    }

    // Ensure the quantity doesn't drop below zero
    if (newQuantity < 0) {
      return NextResponse.json({
        message: "Insufficient stock",
        status: 400,
      });
    }

    // Update product quantity in the database
    const updateDoc = {
      $set: {
        quantity: newQuantity,
      },
    };

    const result = await productListCollection.updateOne(filter, updateDoc); // Fix: Correct argument order

    if (result.modifiedCount === 0) {
      return NextResponse.json({
        message: "No changes were made to the product quantity.",
        status: 400,
      });
    }

    return NextResponse.json({
      message: "Successfully updated product quantity",
      status: 200,
      result,
    });
  } catch (error) {
    console.error("Error updating product quantity:", error);
    return NextResponse.json({
      message: "An error occurred while updating the product",
      status: 500,
    });
  }
}
