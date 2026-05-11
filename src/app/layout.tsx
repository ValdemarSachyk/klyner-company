import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KLYNER – Profesjonalne sprzątanie | Jelenia Góra, Szklarska Poręba, Karpacz",
  description:
    "Profesjonalne usługi sprzątania w Jeleniej Górze, Szklarskiej Porębie i Karpaczu. Sprzątanie mieszkań, domów, biur i obiektów Airbnb. Mycie okien, pranie kanapy i dywanów.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
