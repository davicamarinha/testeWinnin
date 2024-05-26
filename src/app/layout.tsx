import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { AnimeProvider } from "@/context";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desafio frontend Winnin",
  description: "É um teste...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AnimeProvider>
      <html lang="pt-br">
        <body className={mulish.className}>{children}</body>
      </html>
    </AnimeProvider>
  );
}
