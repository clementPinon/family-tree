// Basic password protection for every page (Vercel Routing Middleware).
// Set BASIC_AUTH_USER and BASIC_AUTH_PASSWORD in Vercel > Project > Settings > Environment Variables.
import { next } from '@vercel/functions';

export const config = { matcher: '/:path*' };

export default function middleware(request) {
  const user = process.env.BASIC_AUTH_USER;
  const pass = process.env.BASIC_AUTH_PASSWORD;
  const header = request.headers.get('authorization') || '';
  if (user && pass && header.startsWith('Basic ')) {
    const [u, p] = atob(header.slice(6)).split(':');
    if (u === user && p === pass) return next();
  }
  return new Response('Accès protégé', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Famille", charset="UTF-8"' },
  });
}
