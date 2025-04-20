import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, name, message } = await req.json();
  
  const response = await fetch('https://formspree.io/f/xqaprrpg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, name, message })
  });

  if (!response.ok) {
    throw new Error('Failed to submit form');
  }
  
  return NextResponse.json({ success: true });
}
