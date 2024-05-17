import React from "react";
import "./globals.css";
import { Footer, Navbar } from "@components";

export const metadata = {
  title: "Coffee Store",
  description: "Explore some of the best coffee in the world",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body className="flex justify-center bg-slate-600 font-monteserat">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

interface RootLayoutProps {
  children: React.ReactNode;
}
