import { Inter } from 'next/font/google'
import "./globals.css";
import { ReactNode } from 'react';
import MouseGlow from './components/MouseGlow';

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
    <html lang="en" className={`size-full ${inter.className} no-scrollbar`}>
      <body className={`width-full min-h-full h-fit flex bg-primary`}>
        <MouseGlow />
        {props.children}
      </body>
    </html>
  );
}
