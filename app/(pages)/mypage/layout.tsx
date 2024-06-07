import Script from "next/script";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (<>
    <Script  
      strategy="afterInteractive"
      src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_ID}&submodules=geocoder`}></Script>
    {children}
  </>);
}
