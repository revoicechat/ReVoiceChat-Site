import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function proxy(request: NextRequest) {
    if (process.env.RL_HTACCESS_ENABLED === 'true') {
        const authHeader = request.headers.get('authorization');
        if(!authHeader) {
            return new NextResponse('Authentification requise', {status: 401, headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' }});
        }

        const auth = authHeader.split(' ')[1];
        const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':');
        if(user!==process.env.RL_HTACCESS_USER || pwd!==process.env.RL_HTACCESS_PASSWORD) {
            return new NextResponse('Authentification requise', {status: 401, headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' }});
        }
    }

    // Allow access to the admin panel in development mode only
    if (request.nextUrl.pathname.startsWith(`/${process.env.RL_ADMIN_URL}`)) {
        if (process.env.NODE_ENV !== 'development') return new NextResponse(null, {status:404});
    }
}
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}