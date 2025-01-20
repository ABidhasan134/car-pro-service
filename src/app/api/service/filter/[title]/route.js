import connectionDB from "@/lib/connectionDB";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const db = await connectionDB();
  const serviceCollection = db.collection("services");
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page")) || 1;
  const pageSize = parseInt(url.searchParams.get("pageSize")) || 3;

  try {
    // server side empty data checks
    if (!params.title) {
      return NextResponse.json(
        { message: "Title parameter is required", status: 400 },
        { status: 400 }
      );
    }

    // Search query with regex
    const query = { title: { $regex: params.title, $options: "i" } };

    // Count total matching documents
    const totalResults = await serviceCollection.countDocuments(query);

    // Apply pagination
    const searchResult = await serviceCollection
      .find(query)
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .toArray();

    const totalPages = Math.ceil(totalResults / pageSize);

    // Return response
    return NextResponse.json({
      message: "Search completed successfully",
      status: 200,
      result: searchResult,
      totalResults,
      totalPages,
    });
  } catch (error) {
    console.error("Error during search operation:", error);
    return NextResponse.json(
      { message: "An error occurred while processing your search", status: 500 },
      { status: 500 }
    );
  }
}
