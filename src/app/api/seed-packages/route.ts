import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Package from "@/models/Package";

const packagesData = [
  {
    title: "The Dragon's Emerald Trail",
    location: "Vietnam",
    duration: "8 Days Expedition",
    price: "₹1,25,000",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200",
    description: "An elite journey through the pulse of Indochina. Experience luxury amidst ancient limestone wonders."
  },
  {
    title: "Kingdom of Clouds",
    location: "Ladakh, India",
    duration: "10 Days Journey",
    price: "₹85,000",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1200",
    description: "A high-altitude odyssey of silence and spiritual discovery through ancient monasteries."
  },
  {
    title: "Grand Alpine Luxe",
    location: "Switzerland",
    duration: "12 Days Luxury",
    price: "₹4,85,000",
    image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=1200",
    description: "The ultimate European summer. Private mountain guides and palatial Swiss hospitality."
  },
  {
    title: "The Island Spirit",
    location: "Indonesia",
    duration: "7 Days Pure Bliss",
    price: "₹1,15,000",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200",
    description: "Lush jungles, emerald rice terraces, and private cliffside villas."
  },
  {
    title: "The Azure Archipelago",
    location: "Philippines",
    duration: "9 Days Island Hopping",
    price: "₹1,45,000",
    image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=1200",
    description: "Discover private lagoons and crystal-clear secret beaches across 7,000 islands."
  }
];

export async function GET() {
  try {
    await dbConnect();

    // Check if any packages exist to avoid duplicates
    const count = await Package.countDocuments();
    if (count > 0) {
      return NextResponse.json({ message: "Database already has packages. Seed skipped to avoid duplicates." });
    }

    const seededPackages = await Package.insertMany(packagesData);

    return NextResponse.json({ 
      message: "All journeys seeded successfully!", 
      count: seededPackages.length 
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
