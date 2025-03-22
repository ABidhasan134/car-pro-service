import connectionDB from "@/lib/connectionDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const db = await connectionDB();
    const body = await request.json();
    const { email } = params;
    const { bookingStatus,customID } = body;

    try {
        const userCollection = db.collection("users");

        // Use `$elemMatch` to find the correct sub-document inside `customservices`
        const result = await userCollection.updateOne(
            { email, "customservices.customID": customID }, 
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
export async function DELETE(request, { params }) {
    try {
        const db = await connectionDB();
        const userCollection = db.collection("users"); // Ensure this matches your DB setup
        const body = await request.json();
        const userEmail = params.email; 
        const  customID  = body.customID;

        console.log("Deleting:",  customID, userEmail );

        const result = await userCollection.updateOne(
            { email: userEmail }, // Match the correct user email field
            { $pull: { customservices: { customID: customID } } } // Match customID as a string
        );

        if (result.modifiedCount === 0) {
            return NextResponse.json({
                message: "Custom service not found or already deleted",
                status: 404,
            });
        }
        console.log(result);
        return NextResponse.json({
            message: "Custom service deleted successfully",
            status: 200,
            result
        });

    } catch (error) {
        console.error("Delete Error:", error);
        return NextResponse.json({
            message: "Something went wrong",
            status: 500
        });
    }
}
