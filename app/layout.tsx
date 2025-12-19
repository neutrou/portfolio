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
      className="size-full"
    >
      <body
        className={`size-full ${JetBrainsMono.variable} flex-1 antialiased flex justify-center items-center`}
      >
        {children}
      </body>
    </html>
  );
}
