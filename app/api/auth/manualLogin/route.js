import { sign, verify } from "jsonwebtoken";
import { NextResponse } from "next/server";
import { AUTH_COOKIE, MAX_AGE_JWT } from "@/constants";
import { cookies } from "next/headers";

export async function GET() {
    try {
        const allCookies = cookies();
        const tocken = allCookies.get(AUTH_COOKIE)?.value;
        const secret = process.env.JWT_SECRET_KEY || "0192837465";

        if(!tocken) {
            return  NextResponse.json({ message:"UnAuthorized!", user:{ username:null, error:"UnAuthorized!" } }, { status:201 });
        }
    
        let data = verify(tocken , secret);
        // console.log(data);
        
        return  NextResponse.json({ message:"Authorized!", user:{ username:"admin", error:null }}, { status:201 });
    } catch(error) {        
        return NextResponse.json({ message:"something went wrong!", user:{ username:null, error:"Something went wrong!" } } , { status:401 });
    }
}

export async function POST(req) {
    try {
        const { username , password } = await req.json();

        if(username !== "admin" || password !== "admin") {
            return NextResponse.json({ message:"Unauthorized user!" } , { status:201 });
        }

        const secret = process.env.JWT_SECRET_KEY || "0192837465";
        const tocken = sign({ username, password } , secret , { expiresIn:MAX_AGE_JWT });

        const serialized = cookies().set({
            name:AUTH_COOKIE , 
            value:tocken ,
            secure:process.env.NODE_ENV === "production",
            httpOnly:true,
            sameSite:"strict",
            maxAge:MAX_AGE_JWT,
            path:"/"
        })
        return  NextResponse.json({ message:"Authorized!" , username}, { status:200 , headers:{ "Set-Cookie":serialized }});
        // return new NextResponse(JSON.stringify({ message:"Authorized!" }, { status:200 , headers:{ "Set-Cookie":serialized }}))
    } catch(error) {
        return NextResponse.json({ message:"something went wrong!" } , { status:401 });
    }
}