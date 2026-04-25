import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Travel Gallery | Orovista Holidays",
  description: "Explore our visual narrative of luxury travel across the globe. Witness breathtaking landscapes, exotic resorts, and exclusive experiences curated by Orovista Holidays.",
  openGraph: {
    title: "Global Travel Gallery | Orovista Holidays",
    description: "Explore our visual narrative of luxury travel across the globe. Witness breathtaking landscapes, exotic resorts, and exclusive experiences.",
    url: "https://www.orovistaholidays.com/gallery",
    type: "website",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Orovista Holidays Global Travel Gallery",
            "description": "A curated collection of luxury travel destinations, exotic resorts, and exclusive global experiences.",
            "url": "https://www.orovistaholidays.com/gallery",
          }),
        }}
      />
      {children}
    </>
  );
}
