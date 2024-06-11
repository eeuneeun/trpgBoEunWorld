import { SWRConfig } from "swr";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // # SWRConfig 전역 설정
  // - useSWRConfig 로 하위 컴포넌트에서 사용 가능함
  return (<>
    <SWRConfig value={{
       dedupingInterval: 100,
       refreshInterval: 100,
       fallback: { a: 1, b: 1 }
    }}>
      <div className="game" id="game">
        {children}
      </div>
    </SWRConfig>
  </>);
}
