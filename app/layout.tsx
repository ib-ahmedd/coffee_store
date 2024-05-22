import React from "react";
import "./globals.css";
import { Footer, Navbar } from "@components";

export const metadata = {
  title: "Coffee Store",
  description: "Explore some of the best coffee in the world",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html className="w-full" lang="en">
      <body className="w-full overflow-x-hidden flex flex-col items-center font-monteserat">
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
