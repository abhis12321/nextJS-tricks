import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";


dbConnect();
export async function GET() {
    try {
        return NextResponse.json({ success:true , message:"hello world" })
    } catch(error) {
        return NextResponse.json({ success:false , message:error.message })
    }
}