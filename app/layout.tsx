import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./_styles/reset.css";
import "./_styles/global.css";


import Providers from "./_lib/HOC/Provider"; // NextAuth Session Provider 
import Header from "./_components/layout/header";
import Snb from "./_components/layout/snb";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FLAT MATCHER",
  description: "즐겁게 살아보아요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Snb />
          <main className="contents-wrap">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
