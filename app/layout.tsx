import type { Metadata } from "next";

import Providers from "./_lib/HOC/Provider"; // NextAuth 세션 제공자 
import useSWR, { SWRConfig } from 'swr' // Swr 전역 설정

import { Inter } from "next/font/google";
import "./_styles/reset.css";
import "./_styles/global.css";

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
  // const { data: events } = useSWR('./api/chat')
  // const { data: projects } = useSWR('./api/asocket')
  // const { data: user } = useSWR('./api/user', { refreshInterval: 0 }) // 오버라이드

  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>
          {/* <SWRConfig
            value={{
              refreshInterval: 3000,
              fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
            }}
          >   */}
            <Header />
            <Snb />
            <main className="contents-wrap">
              {children}
            </main>
          {/* </SWRConfig> */}
        </Providers>
      </body>
    </html>
  );
}
