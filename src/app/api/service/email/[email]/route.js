import connectionDB from "@/lib/connectionDB";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
    const db = await connectionDB();
    try {
        const userCollection = db.collection("users");
        const filter = { email: params.email }; // Properly define the filter object
        const user = await userCollection.findOne(filter); // Find user by email
        const data = await request.json();
        const payment = data.payInfo;
        
        if (!user) {
            return new NextResponse(JSON.stringify({ success: false, message: "User not found" }), { status: 403 });
        }
        
        // If the user already has payments, add the new payment to the history
        let updatedPayHistory = user.servicesHistory || []; // Initialize payHistory if it doesn't exist

        // Check if payHistory is an array and has 5 or more elements
        if (Array.isArray(updatedPayHistory) && updatedPayHistory.length >= 5) {
            updatedPayHistory.pop(); // Remove the last item
        }
        updatedPayHistory.unshift(payment); // Add the new payment to the beginning of the array

        // Prepare the update document
        const updatedoc = {
            $set: {
                servicesHistory: updatedPayHistory
            }
        };
        
        const options = { upsert: true }; // Allow upserting (insert if not exists)
        const paymentUpdate = await userCollection.updateOne(filter, updatedoc, options);

        // Respond with the result of the update
        return new NextResponse(JSON.stringify({ success: true, paymentUpdate }), { status: 200 });
    } catch (error) {
        console.log("Error in the POST route:", error);
        return new NextResponse(JSON.stringify({ success: false, message: "Internal server error" }), { status: 500 });
    }
}

// if(user.payment.length>0){
//     const historyDataAdd=user.payment.unshift(payment);
//     const updatedoc={
//         $set:{

//             payHistory:historyDataAdd}
//         }
//     const paymentUpdate=await userCollection.updateOne(filter,updatedoc)
//     return new NextResponse(JSON.stringify({paymentUpdate},{status:200}))
// }