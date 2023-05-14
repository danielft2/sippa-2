import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { TOKEN_KEY } from './storage/storage.config';

export function middleware(request: NextRequest) {
   const token = request.cookies.get(TOKEN_KEY);
   if (token) {
      if (
         request.nextUrl.pathname === '/' ||
         request.nextUrl.pathname === '/signin'
      ) {
         return NextResponse.redirect(new URL('/dashboard', request.url));
      }

      return NextResponse.next();
   }

   if (request.nextUrl.pathname === '/signin') return NextResponse.next();
   return NextResponse.redirect(new URL('/signin', request.url));
}

export const config = {
   matcher: ['/', '/signin', '/dashboard']
};
