import connectionDB from "@/lib/connectionDB";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb"; // Import ObjectId for querying by _id

export async function GET(request, { params }) {
//   console.log("params Id is here", params, 'and request', request);
  
  const db = await connectionDB();
  const serviceCollection = db.collection('services');
  
  try {
    // Convert params.id into ObjectId for MongoDB
    const service = await serviceCollection.findOne({ _id: new ObjectId(params.id) });
    
    if (!service) {
      return NextResponse.json({ message: "Service not found" }, { status: 404 });
    }

    return NextResponse.json(service);
  } catch (error) {
    console.log("This is an error", error);
    return NextResponse.json({ message: "Failed to fetch service" }, { status: 500 });
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
  }
}