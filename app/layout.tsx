import type { Metadata } from "next";
import "./globals.css";
import { NavBar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Travel App",
  description: "Travel UI/UX App for Camping",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
