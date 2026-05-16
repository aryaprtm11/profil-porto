import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import { LanguageProvider } from "./components/LanguageContext";
import LoadingScreen from "./components/LoadingScreen";
import MusicPlayer from "./components/MusicPlayer";
import SmoothScroll from "./components/SmoothScroll";
import TargetCursor from "./components/TargetCursor";
import "lenis/dist/lenis.css";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arya Pratama",
  description: "Portfolio Arya Pratama",
  icons: {
    icon: "/logo/AP.ico",
    shortcut: "/logo/AP.ico",
    apple: "/logo/AP.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <LoadingScreen />
          <SmoothScroll />
          <TargetCursor />
          {children}
          <MusicPlayer />
        </LanguageProvider>
      </body>
    </html>
  );
}
