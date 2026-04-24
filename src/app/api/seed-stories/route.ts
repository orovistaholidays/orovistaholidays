import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Story from "@/models/Story";

const storiesData = [
  {
    quote: "Everything was clear, professional, and easy from start to finish. I felt supported the whole way throughout my European expedition.",
    name: "Arjun Rai",
    role: "Adventure Enthusiast",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
    heading: "The experience was seamless and genuinely reassuring."
  },
  {
    quote: "Orovista didn't just book a trip; they crafted a masterpiece. From the backwaters of Kerala to the peaks of Ladakh, it was flawless.",
    name: "Sanya Malhotra",
    role: "Luxury Traveler",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
    heading: "An absolute masterclass in luxury travel planning."
  },
  {
    quote: "Their ground support is unmatched. When we had a flight delay in Vietnam, the team handled everything before we even asked.",
    name: "David Chen",
    role: "Digital Nomad",
    rating: 4,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
    heading: "Unrivaled support when it matters the most."
  }
];

export async function GET() {
  try {
    await dbConnect();

    const count = await Story.countDocuments();
    if (count > 0) {
      return NextResponse.json({ message: "Database already has stories. Seed skipped." });
    }

    const seededStories = await Story.insertMany(storiesData);

    return NextResponse.json({ 
      message: "All real stories seeded successfully!", 
      count: seededStories.length 
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
