import type { Metadata } from "next";
import { Manrope, Numans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deep Emerging Tech Incubator Program",
  description:
    "A transformative initiative Brought together by Internationally recognized bodies and universities to breach the gap in Deep learning technology skills.",
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const numans = Numans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-numans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${numans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
