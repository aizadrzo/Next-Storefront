import type { Metadata } from "next";
import { Footer, Navbar } from "@/components";
import { CartProvider } from "./Context/store";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-[1110px] px-5 min-h-screen flex flex-col">
        <CartProvider>
          <Navbar />
          <div className="grow">{children}</div>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
