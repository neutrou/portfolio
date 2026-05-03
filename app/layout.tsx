import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';
import MouseGlow from './components/MouseGlow';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F172A',
};

export const metadata = {
  title: 'Victor Algranti - Portfolio',
  description: 'Software Engineer portfolio showcasing projects and experience.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`size-full ${inter.className} no-scrollbar`}>
      <body className="width-full min-h-full h-fit flex bg-primary">
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}
