import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  if (!process.env.NEON_AUTH_BASE_URL) {
    return NextResponse.json({ error: 'Auth not configured' }, { status: 503 });
  }
  const { authApiHandler } = await import('@neondatabase/auth/next/server');
  const handlers = authApiHandler();
  return handlers.GET(request, context);
}

export async function POST(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  if (!process.env.NEON_AUTH_BASE_URL) {
    return NextResponse.json({ error: 'Auth not configured' }, { status: 503 });
  }
  const { authApiHandler } = await import('@neondatabase/auth/next/server');
  const handlers = authApiHandler();
  return handlers.POST(request, context);
}
