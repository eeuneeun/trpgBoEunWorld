export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<>
    <div className="game" id="game">
      {children}
    </div>
  </>);
}
