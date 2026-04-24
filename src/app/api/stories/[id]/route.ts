import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Story from '@/models/Story';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await dbConnect();
    const story = await Story.findById(id);
    if (!story) {
      return NextResponse.json({ success: false, error: 'Story not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: story });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await dbConnect();
    const body = await request.json();
    const updatedStory = await Story.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!updatedStory) {
      return NextResponse.json({ success: false, error: 'Story not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: updatedStory });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await dbConnect();
    const deletedStory = await Story.findByIdAndDelete(id);
    if (!deletedStory) {
      return NextResponse.json({ success: false, error: 'Story not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
