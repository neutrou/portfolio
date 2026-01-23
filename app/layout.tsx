import { Inter } from 'next/font/google'
import "./globals.css";
 
const inter = Inter({
  subsets: ['latin'],
})

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`size-full ${inter.className}`}>
      <body className={`size-full flex bg-primary pt-12.5 pb-12.5 pr-5 pl-5`}>{children}</body>
    </html>
  );
}
