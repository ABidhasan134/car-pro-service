import connectionDB from "@/lib/connectionDB";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  const db = await connectionDB();
  const body = await request.json();
  const productData = body.productData; // Data to be added to order history
  const filter = { email: params.email };
  const userCollection = db.collection("users");

  try {
    // Find the user
    const user = await userCollection.findOne(filter);

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    // Retrieve and update order history
    const orderHistory = user.orderHistory || [];
    if (Array.isArray(orderHistory) && orderHistory.length >= 10) {
      orderHistory.pop(); // Remove the last item if history exceeds 10 entries
    }
    orderHistory.unshift(productData); // Add the new product data to the beginning

    // Prepare the update document
    const updateDoc = {
      $set: { orderHistory },
    };

    // Update the user in the database
    const updateResult = await userCollection.updateOne(filter, updateDoc);

    // console.log("Order history updated", updateResult);

    return NextResponse.json({ success: true, message: "Order updated",result:updateResult });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}