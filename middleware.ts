import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 루트 경로로 접근 시 /en 으로 리디렉트
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  return NextResponse.next();
}

// 아래 설정이 꼭 있어야 middleware가 /en 같은 다국어 경로에서 작동함
export const config = {
  matcher: ['/'],
};
