'use server';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ name: 'Asel' }, { status: 200 });
}
