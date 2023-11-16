import type { Metadata } from "next";
import "./globals.css";

import { tthoves } from "./ui/fonts";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Ensuria",
  description: "The best insurance app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${tthoves.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
