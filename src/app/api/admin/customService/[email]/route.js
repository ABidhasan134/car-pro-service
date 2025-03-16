import connectionDB from "@/lib/connectionDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const db = await connectionDB();
    const body = await request.json();
    const { email } = params;
    const { bookingStatus } = body;

    try {
        const userCollection = db.collection("users");

        // Use `$elemMatch` to find the correct sub-document inside `customservices`
        const result = await userCollection.updateOne(
            { email, "customservices.bookingStatus": { $exists: true } }, 
            { $set: { "customservices.$.bookingStatus": bookingStatus } }
        );

        return NextResponse.json({
            message: "Custom service status updated successfully",
            status: 200,
            result
        });
    } catch (e) {
        console.log("Error updating custom service", e);
        return NextResponse.json({
            message: "Custom service update error",
            status: 500,
            error: e.message
        });
    }
}
