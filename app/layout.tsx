import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const JetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      className="min-h-screen w-full"
    >
      <body
        className={`flex-1 ${JetBrainsMono.variable} flex-1 antialiased flex p-20`}
      >
        {children}
      </body>
    </html>
  );
}
