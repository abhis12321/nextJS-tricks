import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { resolve } from "styled-jsx/css";


dbConnect();
export async function GET() {
    try {
        const users = [
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
            { name: "ab", age: 28 },
        ]
        return NextResponse.json({ success: true, message: "hello world", users })
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message })
    }
}

