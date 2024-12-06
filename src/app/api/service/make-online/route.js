import connectionDB from "@/lib/connectionDB";
import { NextResponse } from "next/server";

export async function POST(request) {
  const db = await connectionDB();
  const userCollection = db.collection("users");
  const body = await request.json();
  const email = body.email;
  const serialNo = body.serialNo;
  console.log(email,serialNo);

  try {
    // Ensure the email and serialNo exist in the request body
    if (!email || !serialNo) {
      return NextResponse.json({
        message: "Email and serialNo are required",
        status: 400,
      });
    }

    // Find the user by email and match the specific service in the array
    const result = await userCollection.findOneAndUpdate(
      {
        email, // Match user by email
        "servicesHistory.serialNo": serialNo, // Match the specific service in the array
      },
      {
        $set: { "servicesHistory.$.typeOffPay": "online" }, // Update the typeOffPay field
      },
      { returnDocument: "after" } // Return the updated document
    );

    // If no document was found or updated
    if (!result.value) {
      return NextResponse.json({
        message: "Service history not found or already updated",
        status: 400,
      });
    }

    return NextResponse.json({
      message: "Payment type updated successfully",
      updatedDocument: result.value,
      status: 200,
    });
  } catch (error) {
    console.error("Failed to update payment type:", error);
    return NextResponse.json({ message: "Internal server error", status: 500 });
  }
}