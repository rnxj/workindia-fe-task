import type { Metadata } from "next";
import { Inter } from "next/font/google";

import BottomBar from "@/components/nav/bottom-bar";
import { MUIWrapper } from "@/components/providers/mui";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WorkIndia FE Task",
  description: "WorkIndia FE Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MUIWrapper>
        <body className={inter.className}>
          {children}
          <BottomBar />
        </body>
      </MUIWrapper>
    </html>
  );
}
