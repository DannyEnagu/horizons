import type { Metadata } from "next";
import { Nunito, Roboto } from "next/font/google";

import 'primeicons/primeicons.css';
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  variable: "--font-roboto",
})

const nunito = Nunito({
  weight: ['400', '600', '700'],
  variable: "--font-nunito",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${nunito.variable} antialiased`}
      >
          <div className="min-h-screen bg-[#EEEEEE] text-black">
            <main>
              {children}  
            </main>
          </div>
      </body>
    </html>
  );
}