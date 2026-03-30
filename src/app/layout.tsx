import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import SplashScreen from "@/components/SplashScreen";

export const metadata: Metadata = {
  title: "District Eleven | Premium Creative & Brand Development Studio",
  description:
    "A premium creative and brand development studio in Osu, Accra. Photography, podcast production, brand strategy and content creation.",
  keywords: "creative studio, brand development, photography, podcast, content, Osu, Accra, Ghana",
  openGraph: {
    title: "District Eleven",
    description: "Premium creative & brand development studio in Osu, Accra.",
    siteName: "District Eleven",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0a0a0a] text-white overflow-x-hidden">
        <SmoothScroll>
          <SplashScreen />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
