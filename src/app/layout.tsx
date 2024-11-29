import type { Metadata } from "next";
import { americana } from "@/utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saint Jo",
  description: "Coming Soon",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${americana.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
