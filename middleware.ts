
import { withAuth } from "next-auth/middleware" 
import { NextResponse, NextRequest } from 'next/server'
import { signIn, signOut, useSession } from 'next-auth/react'

const allowedOrigins = ['https://naveropenapi.apigw.ntruss.com', `${process.env.NEXT_PUBLIC_URL}`, 'http://localhost:3030']
 
const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}
 
export function middleware(request: NextRequest) {
  // Check the origin from the request
  const origin = request.headers.get('origin') ?? ''
  const isAllowedOrigin = allowedOrigins.includes(origin)
 
  // Handle preflighted requests
  const isPreflight = request.method === 'OPTIONS'
 
  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
      ...corsOptions,
    }
    return NextResponse.json({}, { headers: preflightHeaders })
  }
 
  // Handle simple requests
  const response = NextResponse.next()
 
  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  }
 
  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
 
  return response
}

export default withAuth({
  callbacks: {
	 authorized: ({ token }) => token != null,
  },
})

export const config = {
  matcher: [
    '/mypage/:path*',
    '/api/:path*'
    // '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
