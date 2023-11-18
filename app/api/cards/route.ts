import { cards } from "@/app/lib/cards/data";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(cards);
}