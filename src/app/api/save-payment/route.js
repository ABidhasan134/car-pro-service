import connectionDB from "@/lib/connectionDB";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
      product_type,
      pay_date,
      email,
      name
    } = body;
    console.log("user in backend",email, name);
    const paymentInfo = {
      payment_Id: paymentIntentId,
      payment_status,
      payment_amount,
      Item_id,
      Item_name,
      retailer_name,
      singel_price,
      product_type,
      pay_date,
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
    // sending mail to user
    const auth = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
        user: process.env.NEXT_APP_EMAIL,
        pass: process.env.NEXT_APP_PASSWORD,
      },
    });
    const receiver = {
      from: "abeydhasan134@gmail.com",
      to: email,
      subject: ``,
      text: `We have recive ${payment_amount}.Thank your payment. your transaction id is ${paymentIntentId} `,
    };

    auth.sendMail(receiver, (error, emailResponse) => {
      if (error) throw error;
      console.log("success!");
      response.end();
    });

    // console.log("Database update result:", result);

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
