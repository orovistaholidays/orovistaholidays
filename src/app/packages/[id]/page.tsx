import dbConnect from "@/lib/mongodb";
import Package from "@/models/Package";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  await dbConnect();
  
  try {
    // Try finding by slug first, then by _id
    let pkg = await Package.findOne({ slug: id });
    if (!pkg && id.match(/^[0-9a-fA-F]{24}$/)) {
      pkg = await Package.findById(id);
    }

    if (!pkg) return { title: "Package Not Found" };

    return {
      title: `${pkg.title} | Luxury Tour Package | Orovista Holidays`,
      description: pkg.description,
      openGraph: {
        title: `${pkg.title} | Luxury Tour Package | Orovista Holidays`,
        description: pkg.description,
        images: [pkg.image],
        type: "website",
      },
    };
  } catch(e) {
    return { title: "Package Not Found" };
  }
}

export default async function PackageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await dbConnect();
  
  let pkg = null;
  try {
    // Try finding by slug first, then by _id
    pkg = await Package.findOne({ slug: id });
    if (!pkg && id.match(/^[0-9a-fA-F]{24}$/)) {
      pkg = await Package.findById(id);
    }
  } catch(e) {
    // invalid id
  }

  if (!pkg) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": pkg.title,
    "description": pkg.description,
    "image": pkg.image,
    "provider": {
      "@type": "TravelAgency",
      "name": "Orovista Holidays"
    },
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "TouristDestination",
            "name": pkg.location
          }
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "price": pkg.price.replace(/[^0-9.]/g, ''),
      "priceCurrency": "INR"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col min-h-screen font-sans bg-white">
        <div className="flex justify-between items-center px-6 md:px-12 py-8 bg-white border-b border-black/5">
           <span className="text-[14px] font-black uppercase tracking-widest text-black/40">{pkg.title}</span>
           <Link href="/#packages" className="p-3 bg-neutral-100 rounded-full hover:bg-black hover:text-white transition-all shadow-sm">
              <X className="w-6 h-6" />
           </Link>
        </div>
        <div className="flex-grow overflow-y-auto">
           <div className="max-w-[1400px] mx-auto py-12 md:py-24 px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div className="rounded-[24px] md:rounded-[48px] overflow-hidden shadow-2xl h-[300px] sm:h-[450px] lg:h-auto">
                 <img src={pkg.image} className="w-full h-full object-cover" alt={pkg.title} />
              </div>
              <div className="flex flex-col justify-center">
                 <h2 className="text-[32px] md:text-[54px] lg:text-[72px] font-black text-black uppercase leading-[0.85] tracking-tighter mb-8">{pkg.title}</h2>
                 <p className="text-[16px] md:text-[18px] text-black/60 font-medium leading-relaxed mb-12">{pkg.description}</p>

                 <div className="p-8 md:p-10 bg-[#f8f6f4] rounded-[32px] md:rounded-[48px] flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8 border border-black/5 shadow-inner">
                    <div className="text-center sm:text-left">
                       <span className="text-[10px] md:text-[11px] font-bold text-black/30 uppercase tracking-widest block mb-1">Elite Starting Point</span>
                       <span className="text-[28px] md:text-[32px] font-black text-black">{pkg.price}</span>
                    </div>
                    <a
                       href={`https://wa.me/910000000000?text=I'm interested in the ${pkg.title} journey.`}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="w-full sm:w-auto px-10 py-5 bg-black text-white rounded-full font-black text-[11px] md:text-[12px] uppercase tracking-widest hover:bg-primary transition-all shadow-xl flex items-center justify-center gap-3"
                    >
                       Speak with strategists <ArrowRight className="w-4 h-4" />
                    </a>
                 </div>
              </div>
           </div>
        </div>
     </div>
   </>
  );
}
