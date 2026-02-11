import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
    // Check if we are in production or if a password is set
    const basicAuth = req.headers.get('authorization')

    // You can set these in your deployment environment variables
    // Default fallback for demo purposes if env vars are missing
    const userEnv = process.env.BASIC_AUTH_USER || 'admin'
    const pwdEnv = process.env.BASIC_AUTH_PASSWORD || 'password123'

    if (basicAuth) {
        const authValue = basicAuth.split(' ')[1]
        const [user, pwd] = atob(authValue).split(':')

        if (user === userEnv && pwd === pwdEnv) {
            return NextResponse.next()
        }
    }

    return new NextResponse('Authentication Required', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
    })
}

export const config = {
    // Match all paths except static files and API routes if needed, or protect specific routes
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
