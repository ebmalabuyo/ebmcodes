import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navigation from "@/components/clientComponents/Navigation";
import MobileNavigation from "@/components/clientComponents/MobileNavigation";
import Footer from "@/components/Footer";


const inter = Inter({ 
  weight:["400","700"],
  style: 'normal',
  subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EBMCodes",
  description: "Portfolio App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + " " + "bg-[url('../public/Background.png')] w-full bg-cover bg-no-repeat absolute"} >
        <Providers>
        <Navigation/>
        {children}
        <MobileNavigation/>
        <Footer/>
        </Providers>
        
        </body>
    </html>
  );
}
