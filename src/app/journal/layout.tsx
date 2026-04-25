import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Journal & Blog | Orovista Holidays",
  description: "Discover travel guides, stories, and exclusive tips for your next luxury journey. Read the Orovista Holidays travel journal.",
  openGraph: {
    title: "Travel Journal & Blog | Orovista Holidays",
    description: "Discover travel guides, stories, and exclusive tips for your next luxury journey. Read the Orovista Holidays travel journal.",
    url: "https://www.orovistaholidays.com/journal",
    type: "website",
  },
};

export default function JournalLayout({
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
            "@type": "Blog",
            "name": "Orovista Holidays Travel Journal",
            "description": "Travel guides, stories, and exclusive tips for luxury travel.",
            "url": "https://www.orovistaholidays.com/journal",
          }),
        }}
      />
      {children}
    </>
  );
}
