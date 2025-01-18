import connectionDB from "@/lib/connectionDB"
import { NextResponse } from "next/server"

export async function GET(request) {
    const db = await connectionDB();
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page")) || 1;
    const pageSize = parseInt(url.searchParams.get("pageSize")) || 3;

    try {
        const servicesCollection = db.collection("services");
        const totalProducts = await servicesCollection.countDocuments();
        const result = await servicesCollection
            .find()
            .skip((page - 1) * pageSize)
            .limit(pageSize)
            .toArray();

        const totalPages = Math.ceil(totalProducts / pageSize);

        return NextResponse.json({
            message: "Services retrieved successfully",
            status: 200,
            success: true,
            result,
            totalPages,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Failed to retrieve services",
            status: 500,
            success: false,
        });
    }
}
