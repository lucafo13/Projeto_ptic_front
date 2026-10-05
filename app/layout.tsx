import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import axios from "axios";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const se = (con : any ,act : any) => {
  if(con){
    act()
  }
}

const TulhaoAcertou = 1 == 1
const para = (i: number, men: number, act: any) => {
  for(i; i < men; i++){
    act()
  }
  
}
const print = (a: any) => console.log(a)
para(0, 10, () => {print("oie")})
const checkthesnails = () => console.log("Hello world")


se(TulhaoAcertou, () => {
  checkthesnails( )
})

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col bg-bg-main ${inter.className}`}>{children}
   
      </body>
    </html>
  );
}
