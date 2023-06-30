import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
   const redirectUrl = new URL('/auth/signin', request.url);
   return NextResponse.redirect(redirectUrl, {
      headers: {
         'Set-Cookie': `access_token=; Path=/; max-age=0;`
      }
   });
}
