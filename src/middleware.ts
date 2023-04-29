import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
   const token = request.cookies.get('token');
   if (token) {
      if (request.nextUrl.pathname === '/') {
         return NextResponse.redirect(new URL('/dashboard', request.url));
      }

      return NextResponse.next();
   }

   return NextResponse.redirect(new URL('/signin', request.url));
}

export const config = {
   matcher: ['/dashboard', '/']
};
