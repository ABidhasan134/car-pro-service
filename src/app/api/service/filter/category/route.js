import connectionDB from "@/lib/connectionDB"
import { NextResponse } from "next/server";

export async function POST(request){
    const db= await connectionDB();
    const body= await request.json();
    const filterCategory=body.data;
    const serviceCollection = db.collection('services');
    try{
        console.log("body of category",filterCategory);
        const services = await serviceCollection.find({category: filterCategory}).toArray();
            
            if (!services) {
              return NextResponse.json({ message: "Service not found" }, { status: 404 });
            }
        return NextResponse.json({
            message:"successful",
            status: 200,
            result: services
        })
    }
    catch(error){
        console.log("filter out is not supported", error)
    }
}