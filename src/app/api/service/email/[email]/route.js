import connectionDB from "@/lib/connectionDB";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
    const db=await connectionDB();
    try{
        const userCollection= db.collection("users");
        // const data = await request.json();
        console.log("Here it hitting",request)
        const email=params.email;
        console.log(email)
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    }
    catch(error){
        console.log("this from book now route",error)
    }
}