import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  Rubik as Sans, 
  Roboto_Mono as Mono,
} from '@next/font/google'; 

const sans = Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const mono = Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: "Julie Wang",
  description: "My portfolio site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mono.className}>{children}</body>
    </html>
  );
}
