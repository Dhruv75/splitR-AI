import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header_comp } from "@/components/Header_comp";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import {
  ClerkProvider,
  
} from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Spliter_ai",
  description: "The AI-powered expenses splitting  platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
          <ConvexClientProvider>
            <Header_comp />

            <main className="min-h-screen">{children}</main>
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
