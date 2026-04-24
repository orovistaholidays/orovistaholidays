import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Package from '@/models/Package';

export async function GET() {
  try {
    await dbConnect();
    const packages = await Package.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: packages });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const newPackage = await Package.create(body);
    return NextResponse.json({ success: true, data: newPackage }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
