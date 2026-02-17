import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function proxy(request: NextRequest) {
    // Allow access to the admin panel in development mode only
    if (request.nextUrl.pathname.startsWith(`/${process.env.RL_ADMIN_URL}`)) {
        if (process.env.NODE_ENV !== 'development') return new NextResponse(null, {status:404});
    }
}
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}