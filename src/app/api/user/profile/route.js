import connectionDB from "@/lib/connectionDB";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const db = await connectionDB();
    const body = await request.json();
    const userCollections = db.collection("users");

    const userEmail = body.email;
    const newName = body.newName; // Fix: Ensure correct field name

    if (!newName) {
      return NextResponse.json({ message: "Name is required", status: 400 });
    }

    const filter = { email: userEmail };
    const updateDoc = { $set: { name: newName } };

    const result = await userCollections.updateOne(filter, updateDoc);

    if (result.modifiedCount === 0) {
      return NextResponse.json({ message: "No changes made", status: 400 });
    }

    return NextResponse.json({ message: "Name changed successfully", status: 200 });
  } catch (error) {
    console.error("Error from profile name change:", error);
    return NextResponse.json({ message: "Name not changed", status: 500, error });
  }
}
