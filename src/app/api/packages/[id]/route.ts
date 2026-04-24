import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Package from '@/models/Package';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await dbConnect();
    const pkg = await Package.findById(id);
    if (!pkg) {
      return NextResponse.json({ success: false, error: 'Package not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: pkg });
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
    const updatedPackage = await Package.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!updatedPackage) {
      return NextResponse.json({ success: false, error: 'Package not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: updatedPackage });
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
    const deletedPackage = await Package.findByIdAndDelete(id);
    if (!deletedPackage) {
      return NextResponse.json({ success: false, error: 'Package not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
