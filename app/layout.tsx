import { Inter } from 'next/font/google'
import "./globals.css";
import { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
})

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

type Props = {
  children: ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en" className={`size-full ${inter.className}`}>
      <body className={`width-full min-h-full h-fit flex bg-primary`}>{props.children}</body>
    </html>
  );
}
