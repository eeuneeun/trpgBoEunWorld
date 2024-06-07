import { CrawlerOfNaverEstate, CrawlerOfBackjoon } from "@/app/_components/atomic/templates/crawler";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  CrawlerOfNaverEstate()
  return (<>
      {children}
  </>);
}
