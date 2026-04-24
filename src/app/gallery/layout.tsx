import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Gallery",
  description: "Explore the breathtaking destinations and extraordinary experiences curated by Orovista Holidays. A visual narrative of luxury travel across the globe.",
  openGraph: {
    title: "Tour Gallery | Orovista Holidays",
    description: "Explore our visual narrative of luxury travel experiences.",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
