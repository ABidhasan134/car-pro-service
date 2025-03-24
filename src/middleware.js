import { NextResponse } from 'next/server'
 
export function middleware(request) {
    const token = request.cookies.get('next-auth.session-token') || request.cookies.get('__Secure-next-auth.session-token'); 
    const pathName = request.nextUrl.pathname;

    if (pathName.includes('api')) {
        return NextResponse.next();
    }

    if (!token) {
        return NextResponse.redirect(new URL(`/logIn?redirect=${pathName}`, request.url));
    }

    return NextResponse.next();
}
 
export const config = {
  matcher: ['/services/:path*', '/products/:path*']
}
