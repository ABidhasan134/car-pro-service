import connectionDB from "@/lib/connectionDB";
import { NextResponse } from "next/server";

export async function POST(request) {
  const db = await connectionDB();
  const body = await request.json();
  const filterCategory = body.data;
  const serviceCollection = db.collection("services");
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page")) || 1;
  const pageSize = parseInt(url.searchParams.get("pageSize")) || 3;

  try {
    console.log("body of category", filterCategory);

    // Count total matching documents before pagination
    const totalProducts = await serviceCollection.countDocuments({
      category: filterCategory,
    });

    // Fetch the paginated results
    const services = await serviceCollection
      .find({ category: filterCategory })
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .toArray();

    if (!services.length) {
      return NextResponse.json(
        { message: "Service not found" },
        { status: 404 }
      );
    }

    // Calculate total pages
    const totalPagescategory = Math.ceil(totalProducts / pageSize);

    return NextResponse.json({
      message: "successful",
      status: 200,
      result: services,
      totalPagescategory,
    });
  } catch (error) {
    console.log("filter out is not supported", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
