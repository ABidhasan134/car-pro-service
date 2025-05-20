import connectionDB from "@/lib/connectionDB";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb"; // Import ObjectId for querying by _id

import { corsHeaders } from "@/lib/cors";

export async function GET(request, { params }) {
  const db = await connectionDB();
  const serviceCollection = db.collection('services');
  
  try {
    const service = await serviceCollection.findOne({ _id: new ObjectId(params.id) });
    console.log("this is singel service", service);
    if (!service) {
      return NextResponse.json({
        message: "your service is not found",
        status: 500,headers: {
      ...corsHeaders(),
      'Content-Type': 'application/json',
    },
      })
    }

    return NextResponse.json({
      result: service,
      status: 200,
      headers: {
      ...corsHeaders(),
      'Content-Type': 'application/json',
    },
    })
  } catch (error) {
    console.error("Error fetching service", error);
    return new NextResponse(
      JSON.stringify({ message: "Failed to fetch service" }),
      { status: 500, headers: corsHeaders() }
    );
  }
}


export async function POST(request, {params}){
  const db=await connectionDB();

  try
  {
    return NextResponse.json({message: "service is updated"})
  }
  catch(error){
    console.log("Error is heandling by for service", error)
    return NextResponse.json({message: "Error is heandling by for service",status:500})
  }
}