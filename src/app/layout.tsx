import type { Metadata } from "next";
import "./globals.css";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "AI Engineer Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
