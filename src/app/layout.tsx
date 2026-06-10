import type { Metadata } from "next";
import { Outfit, Geist } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammad Ghaddar (MG) Driving School | Certified Driving Lessons in Lebanon",
  description: "Learn to drive safely with Mohammad Ghaddar (MG) Driving School in Lebanon. Certified manual & automatic lessons, expert instructors, and custom packages tailored for students, parents, and refreshers.",
  keywords: ["Mohammad Ghaddar", "MG Driving School", "Driving School Lebanon", "Saida Driving School", "Learn Driving Lebanon", "Manual Driving Lessons", "Automatic Driving Lessons"],
  authors: [{ name: "Mohammad Ghaddar Driving School" }],
  openGraph: {
    title: "Mohammad Ghaddar (MG) Driving School | Certified Driving Lessons in Lebanon",
    description: "Learn to drive safely with Mohammad Ghaddar (MG) Driving School. Professional manual and automatic training in Saida and surrounding areas.",
    type: "website",
    locale: "en_LB",
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
      className={`${outfit.variable} ${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-dark text-text-primary">
        {children}
      </body>
    </html>
  );
}
