import { NextRequest, NextResponse } from 'next/server';

// Temporary route lock while the portfolio is being rebranded.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPublicAsset =
    ['/favicon.ico', '/arrow.svg', '/github.svg', '/linkedin.svg'].includes(pathname) ||
    /^\/projects\/[^/]+\/[^/]+\.png$/.test(pathname);

  if (pathname === '/' || isPublicAsset) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/', request.url), 307);
}

export const config = {
  matcher: ['/((?!_next/).*)'],
};
