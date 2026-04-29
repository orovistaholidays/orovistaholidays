import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.orovistaholidays.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Orovista Holidays | Luxury Travel & Tour Packages",
    template: "%s | Orovista Holidays"
  },
  description: "Experience the world with Orovista Holidays. Curated luxury tour packages to Europe, Baku, Vietnam, Dubai, and more. Your elite travel partner.",
  keywords: ["luxury travel", "tour packages", "international tours", "Europe tour packages", "Baku tours", "Vietnam travel", "Orovista Holidays", "bespoke travel"],
  authors: [{ name: "Orovista Holidays" }],
  openGraph: {
    title: "Orovista Holidays | Luxury Travel & Tour Packages",
    description: "Curated journeys for the modern explorer. Experience luxury in the world's most remote landscapes with Orovista Holidays.",
    url: "https://www.orovistaholidays.com",
    siteName: "Orovista Holidays",
    images: [
      {
        url: "/assets/orovistaholidayslogo.png",
        width: 1200,
        height: 630,
        alt: "Orovista Holidays Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orovista Holidays | Premium Travel Experiences",
    description: "Curated journeys for the modern explorer. Experience luxury with Orovista Holidays.",
    images: ["/assets/orovistaholidayslogo.png"],
  },
  icons: {
    icon: "/assets/orovistaholidayslogo.png",
    apple: "/assets/orovistaholidayslogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-body bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Orovista Holidays",
              "image": "https://www.orovistaholidays.com/assets/orovistaholidayslogo.png",
              "@id": "https://www.orovistaholidays.com",
              "url": "https://www.orovistaholidays.com",
              "telephone": "+919619099699",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "107, First Floor, Crescent Business Park, Off Telephone Exchange Lane, Behind Fairfield Hotel, Saki Naka",
                "addressLocality": "Mumbai",
                "postalCode": "400072",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "priceRange": "$$$",
              "areaServed": "Global",
              "sameAs": [
                "https://www.instagram.com/orovistaholidays",
                "https://www.facebook.com/orovistaholidays"
              ]
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

