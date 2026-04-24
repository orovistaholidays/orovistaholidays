import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Story from '@/models/Story';

export async function GET() {
  try {
    await dbConnect();
    const stories = await Story.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: stories });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const newStory = await Story.create(body);
    return NextResponse.json({ success: true, data: newStory }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
