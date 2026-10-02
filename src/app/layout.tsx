import type { Metadata, Viewport } from "next";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "AI Engineer Portfolio",
  description: "Personal portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
