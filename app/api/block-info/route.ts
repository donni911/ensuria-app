import { titleData } from "@/app/lib/title/title";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(titleData);
}