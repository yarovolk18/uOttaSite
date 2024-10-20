import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "uOttaHack 7",
  description:
    "The largest Ottawa-based hackathon for the last half-decade, uOttaHack is returning for its most exciting iteration yet! To celebrate this momentous occasion, uOttaHack 7 is expanding the hacker experience with new initiatives to create an unforgettable weekend for its hackers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
