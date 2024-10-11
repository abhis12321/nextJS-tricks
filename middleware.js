import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Check for authentication
  const cookie = cookies().get("jwt-tocken");
  console.log("request => " , cookie);

  if(cookie) {
    return NextResponse.next();
  }
  // Proceed to the requested page
  return NextResponse.redirect(new URL('/login', request.url));
}


export const config = {
  matcher: '/SSG/:path*',
}