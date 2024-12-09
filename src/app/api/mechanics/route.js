import connectionDB from "@/lib/connectionDB";
import { NextResponse } from "next/server";

export async function GET() {
  const db = await connectionDB();

  try {
    const mechanicCollection = db.collection("mechanics");
    const mechanics = await mechanicCollection.find().toArray();

    return NextResponse.json({
      message: "success",
      result: mechanics,
      status: 200,
    });
  } catch (error) {
    console.log("error form mechanic route", error);
  }
}
