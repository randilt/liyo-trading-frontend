import type { Metadata } from "next";

import "./globals.css";
import NavMenu, { ThemeProvider } from "@/components/navigation-menu";
import "@fontsource/russo-one";
import Footer from "@/components/sections/footer-section";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-russo antialiased`}>
        <ThemeProvider>
          <NavMenu />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
