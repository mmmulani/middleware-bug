import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest, evt: NextFetchEvent) {
  // This will rewrite all requests to _dashboard/<path>
  return NextResponse.rewrite(`/_dashboard${request.nextUrl.pathname}`);
}
