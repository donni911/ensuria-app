import type { Metadata } from "next";
import "./globals.css";

import Providers from "./providers";
import { tthoves } from "./styles/fonts";

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
