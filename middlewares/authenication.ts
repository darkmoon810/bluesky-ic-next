import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get('isAuthenticated')?.value
  const isAdminPage = request.nextUrl.pathname.startsWith('/admin')
  const isSignInPage = request.nextUrl.pathname === '/admin/signin'

  if (isAdminPage && !isAuthenticated && !isSignInPage) {
    return NextResponse.redirect(new URL('/admin/signin', request.url))
  }

  if (isSignInPage && isAuthenticated) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*'
}