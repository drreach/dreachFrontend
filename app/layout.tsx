import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "@/components/Navbar";
import { Providers } from "./provider";
import Footer from "@/components/Footer";
import Toaster from "@/components/Toaster";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dreach.in",
  description: "Dreach.in is a platform for doctors and patients to connect and communicate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Providers>
        <Navbar/>
        
        {children}


        </Providers>
        <Footer/>
        <Toaster/>
        </body>
    </html>
  );
}
