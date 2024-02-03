export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-primaryGrey h-dvh">{children}</div>;
}
