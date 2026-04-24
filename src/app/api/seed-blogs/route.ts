import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";

const blogsData = [
  {
    title: "Chasing the Midnight Sun: A Guide to Arctic Luxury",
    category: "Expedition",
    description: "Exploring the northernmost reaches of the globe doesn't mean sacrificing comfort. Discover our top 5 luxury basecamps for aurora hunting.",
    content: `The Arctic Circle has always been the ultimate frontier for the intrepid traveler. But in recent years, a new breed of 'Arctic Luxury' has emerged, blending the raw, untamed beauty of the North with the refined comforts of a five-star retreat.\n\nImagine waking up in a glass-domed igloo as the Aurora Borealis dances directly above your bed. Or returning from a day of dog-sledding to a private sauna and a gourmet meal prepared with locally sourced reindeer and cloudberries.\n\nIn this guide, we explore the most exclusive basecamps from Finland to Greenland, where the silence of the tundra is your only companion and every detail is choreographed for the elite explorer.`,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAmEJdSoiXnLBSF6Gf1jqGP6rmi6YC6wYv29oVAinRU0tiYq4rS_cTSm_NQ0c57JEiMxnYfVFe4urp5SJ8hmQw2DRkkXPT1DBc3t_SfmdvCuTAaI4RU-kyS_-HMdfEhl0C5N_CnCxc-Td_0a9IMCXjXPK8tLO1L7fPJbwdETh3zzrqxkupazOeqr6_5ql70PTIt-c0ftzCEQKhZipLvqN56_S1Tk4h6-LINkFOsGFCulyZ8JDcSqVt0_AGV2W_LsJrhmKgOGH1xfqS",
    isFeatured: true,
  },
  {
    title: "Essential Gear for High-Altitude Safaris",
    category: "Gear & Travel",
    description: "Everything you need to stay safe and stylish while exploring the world's most remote landscapes.",
    content: `When you're trekking through the Himalayas or traversing the high-altitude plateaus of Ladakh, your gear is more than just equipment—it's your lifeline. But for the Orovista traveler, gear must also reflect a sense of style and sophistication.\n\nWe recommend investing in high-performance merino wool layers that regulate temperature naturally. A lightweight, packable down jacket is essential for the sudden temperature drops at 15,000 feet. Don't forget professional-grade polarized optics to protect against the intense alpine sun.\n\nIn this article, we break down the 'Elite Safari Kit' that combines technical superiority with artisanal craftsmanship.`,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYOrdQEHrB-roJJqtXiahLVeQQObeIAux50psskn28F5y4mmlWH2BXzmepigksXfvM4ymE2ElEu0GMe3WrLrJWwOQ6BZEJ8SJl24WS_v5olFnViNBEa-OzxMfXqfwQGwzUzH10SwEkFZJ5e5Pl26j0jHjA7U08vXkzSmdfXdS_GSE2zZMwzh57SoTQBQv8s0VBjrbwoWpeg3KtdTpfWtDu-njK_dPiQHUzNPJLrS9mtyrxpDPBAq-zOpEF2hLEkwMxbojw3-5gY1Rl",
    isFeatured: false,
  },
  {
    title: "Quiet Luxury: The Art of the Hidden Retreat",
    category: "Culture",
    description: "In a world of constant noise, true luxury is found in silence and seclusion. Discover the world's most discreet retreats.",
    content: `True luxury today is not about being seen; it's about not being found. The concept of 'Quiet Luxury' has taken the travel world by storm, as elite travelers seek out hidden sanctuaries that offer absolute privacy and understated elegance.\n\nFrom a converted monastery in the hills of Umbria to a private island in the Philippines that isn't on any map, these retreats prioritize the soul over the spectacle. Here, the service is invisible yet omnipresent, and the architecture dissolves into the natural landscape.\n\nJoin us as we pull back the curtain on the world's most discreet escapes.`,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLZ0jfQjUdGubrcKvtfLoLqvuYmUg98zCle8Bx-jsjMLroPwYPeOfNExVCYrEBia8x3-wfCgUOQoOu4wJR2gkKLN3PWCxFQmwXS3ejTWuglJayO2Qj7UO8R7aMbaExOP8esuFpZpdUdggFKt7UIyg1NgmH6Xl4mfDT8QkCW2COy35xmZkBKPEBRwJcB9HqisLisd8pvmFE2kHcSN6mIjw_Kwzze3FA67CAPBASCW50ThkpcrqtcKbW2SrLpo8Sb1b7Hne-lTJnMwwC",
    isFeatured: false,
  },
];

export async function GET() {
  try {
    await dbConnect();

    const count = await Blog.countDocuments();
    if (count > 0) {
      return NextResponse.json({ message: "Database already has blogs. Seed skipped." });
    }

    const seededBlogs = await Blog.insertMany(blogsData);

    return NextResponse.json({ 
      message: "All blog posts seeded successfully!", 
      count: seededBlogs.length 
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
