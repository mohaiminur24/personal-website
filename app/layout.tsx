import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MainHeader from "./component/common-component/main-header";
import { Nunito } from 'next/font/google';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const geistNunito = Nunito({
  subsets: ['cyrillic-ext'],
  weight: "600",
  style: "normal"
});

export const metadata: Metadata = {
  title: "MohaiMinur",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistNunito} antialiased bg-white min-h-screen w-full text-black`}
      >
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
