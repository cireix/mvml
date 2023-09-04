'use server';
import { NextResponse, NextRequest } from "next/server";
import { Pinecone } from "@/controllers";

// This route would be in the backend
// However for the sake of simplicity,
// we are using the frontend
const PineconeController = new Pinecone(process.env.PINECONE_API_KEY);
export async function POST(request: NextRequest) {
    const body = await request.json();
    try {
        const res = await PineconeController.insertVector(body.id, body.embedding);
        return NextResponse.json(res, { status: 200 });
    } catch (err) {
        // Log error here
        console.log(err);
    }
}
