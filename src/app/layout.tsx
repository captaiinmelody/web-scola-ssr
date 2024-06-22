import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";
import Footer from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Scola",
  description: "It's a scola web profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased font-univers bg-gradient-to-l from-primary/50 via-white/50 to-white/50"
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
