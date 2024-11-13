import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
 
export function middleware(request) {
    const token = cookies(request).get('next-auth.session-token')
    const pathName= request.url
    // console.log("This path from the middelware",pathName);
  // this eception for home page 
    if(pathName.includes('api'))
    {
      return NextResponse.next();
    }

    if(!token) {
        // pathName as search params 
        return NextResponse.redirect(new URL(`/logIn?redirect=${pathName}`, request.url))
    }
  return NextResponse.next();
}
 

export const config = {
  matcher: '/services/:path*',
}