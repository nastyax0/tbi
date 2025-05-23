import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSInit from "@/components/AOSINIT";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import RouteLoader from "@/components/bootloader";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RouteLoader />
        <AOSInit />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
