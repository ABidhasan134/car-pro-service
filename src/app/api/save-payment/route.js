import connectionDB from "@/lib/connectionDB";
import { NextResponse } from "next/server";

export async function POST(request) {
  const db = await connectionDB();
  const body = await request.json();
  const filter = { email: body.email };

  try {
    const userCollection = db.collection("users");
    const user = await userCollection.findOne(filter);

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    const {
      paymentIntentId,
      status: payment_status,
      amount: payment_amount,
      Item_id,
      Item_name,
      retailer_name,
      singel_price,
    } = body;

    const paymentInfo = {
      payment_Id: paymentIntentId,
      payment_status,
      payment_amount,
      Item_id,
      Item_name,
      retailer_name,
      singel_price,
    };

    // Prepare payment history
    console.log("Preparing payment history", paymentInfo);
    const updatedPayHistory = user.payment_history || [];
    if (Array.isArray(updatedPayHistory) && updatedPayHistory.length >= 5) {
      updatedPayHistory.pop(); // Remove the oldest payment
    }
    updatedPayHistory.unshift(paymentInfo); // Add the new payment to the front

    // Update the user document
    const updateDoc = {
      $set: {
        payment_history: updatedPayHistory,
      },
    };

    const options = { upsert: false };
    const result = await userCollection.updateOne(filter, updateDoc, options);

    console.log("Database update result:", result);

    return NextResponse.json({
      success: true,
      message: "Payment saved successfully",
      result,
    });
  } catch (error) {
    console.error("Error saving payment:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
