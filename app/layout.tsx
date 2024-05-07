import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NEIONavbar } from '@/components/nav/NEIONavbar';
import { NEIOFooter } from '@/components/footer/NEIOFooter';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEIO INC.",
  description: "NEIO INC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NEIONavbar />
        <main>{children}</main>
        <NEIOFooter />
      </body>
    </html>
  );
}
