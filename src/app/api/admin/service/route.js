import connectionDB from "@/lib/connectionDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const db = await connectionDB();
  try {
    const body = await request.json();
    const servicesCollection = db.collection("services");

    // Extract service details from body
    const info = body.data;
    const filter = { _id: new ObjectId(body.id) };

    const updateInfo = {
      title: info.title,
      category: info.category,
      price: info.price,
      img: info.image,
      service_type: info.service_type,
      description: info.description,
      facility: [
        {
          name: info.facility1,
          details: info.facility1Dis,
        },
        {
          name: info.facility2,
          details: info.facility2Dis,
        },
      ],
    };

    // Update the service
    const result = await servicesCollection.updateOne(filter, {
      $set: updateInfo,
    });

    // Check if the update was successful
    if (result.matchedCount === 0) {
      return NextResponse.json({ message: "Service not found", status: 404 });
    }

    if (result.modifiedCount === 0) {
      return NextResponse.json({
        message: "No changes were made",
        status: 200,
      });
    }

    return NextResponse.json({ message: "Service is up-to-date", status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Service update failed", error });
  }
}

export async function POST(request) {
  const db = await connectionDB();
  try {
    const body = await request.json();
    const servicesCollection = db.collection("services");
    const service = await servicesCollection.find().toArray();
    // Extract service details from body
    const service_id = service.length + 1;
    const info = {
      service_id: service_id,
      title: body.title,
      img: body.image,
      price: body.price,
      description: body.description,
      category: body.category,
      service_type: body.service_type,
      facility: [
        {
          name: body.facility1,
          details: body.facility1Dis,
        },
        {
          name: body.facility2,
          details: body.facility2Dis,
        },
      ],
    };
    const result = await servicesCollection.insertOne(info);
    console.log(result);
    return NextResponse.json({
      message: "service add successfully",
      status: 200,
      result
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "service not add successfuly add",
      error,
    });
  }
}
