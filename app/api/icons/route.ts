import { icons } from "@/app/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(icons);
}