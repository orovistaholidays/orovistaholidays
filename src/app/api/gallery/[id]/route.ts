import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Gallery from '@/models/Gallery';
import { auth } from '@/auth';

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if ((session?.user as any)?.role !== 'admin') {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    await dbConnect();
    await Gallery.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: 'Item deleted' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
