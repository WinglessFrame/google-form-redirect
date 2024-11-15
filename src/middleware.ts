import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log('middleware')
  const url1 = 'https://forms.gle/UbR46jPQqghhT2XX9'
  const url2 = 'https://forms.gle/sfSN8hGrT9w7Vz91A'
  // randomize the url
  const randomUrl = Math.random() < 0.5 ? url1 : url2
  return NextResponse.redirect(new URL(randomUrl, request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
}