import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();
  const { email, description, subject } = body;

  console.log("Request body:", body);

  try {
    // Create transporter
    const auth = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
        user: process.env.NEXT_APP_EMAIL,
        pass: process.env.NEXT_APP_PASSWORD,
      },
    });

    // Mail options
    const receiver = {
      from: "magicMotore@gmail.com",
      to: email,
      subject: subject,
      text: description,
    };

    // Send email (use await instead of callback)
    const emailResponse = await auth.sendMail(receiver);

    console.log("Email sent successfully:", emailResponse);

    // Return a success response
    return NextResponse.json({
      message: "Mail sent successfully",
      status: 200,
      emailResponse,
    });
  } catch (error) {
    console.error("Failed to send email:", error);

    // Return an error response
    return NextResponse.json(
      { message: "Failed to send email", status: 500, error: error.message }
    );
  }
}
