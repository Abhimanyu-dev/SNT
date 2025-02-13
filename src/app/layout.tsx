import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Merriweather({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  icons: "/images/logo.ico",
  title: "BCS IITK",
  description: "BCS IITK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem >
          <Navbar className="top-2"/>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
