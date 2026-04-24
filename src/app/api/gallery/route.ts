import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Gallery from '@/models/Gallery';
import { auth } from '@/auth';

export async function GET() {
  try {
    await dbConnect();
    const items = await Gallery.find({}).sort({ order: 1, createdAt: -1 });
    return NextResponse.json({ success: true, data: items });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    if ((session?.user as any)?.role !== 'admin') {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const body = await req.json();
    const item = await Gallery.create(body);
    return NextResponse.json({ success: true, data: item });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
