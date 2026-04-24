import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    await dbConnect();

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: "admin@orovista.com" });
    if (existingAdmin) {
      return NextResponse.json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    const admin = await User.create({
      name: "Orovista Admin",
      email: "admin@orovista.com",
      password: hashedPassword,
      role: "admin",
    });

    return NextResponse.json({ 
      message: "Admin seeded successfully", 
      email: "admin@orovista.com",
      password: "admin123 (Please change this later)"
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
