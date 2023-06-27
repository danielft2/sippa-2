import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { TOKEN_KEY } from './storage/storage.config';

export function middleware(request: NextRequest) {
   const token = request.cookies.get(TOKEN_KEY)?.value;

   if (token) {
      if (request.nextUrl.pathname === '/') {
         return NextResponse.redirect(
            new URL('/application/dashboard', request.url)
         );
      }
      return NextResponse.next();
   } else {
      return NextResponse.redirect(new URL('/auth/signin', request.url), {
         headers: {
            'Set-Cookie': `redirectTo=${request.nextUrl.pathname}; path=/; max-age=120;`
         }
      });
   }
}

export const config = {
   matcher: ['/', '/application/:path*']
};
