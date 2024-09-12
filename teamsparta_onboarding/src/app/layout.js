import localFont from "next/font/local";
import "./globals.css"; 
import Navbar from "@/common/Navbar";
import Footer from "@/common/Footer";
import { MainContent } from "@/components/MainContent";
import { QuestionRtan } from "@/common/QuestionRtan";
import { SubNav } from "@/components/SubNav";
// import { useScrollDirection } from "@/hooks/useScrollDirection";
import { CloseSoon } from "@/components/CloseSoon";
import { GameWPN } from "@/components/GameWPN";
import { GameBootcampFromHome } from "@/components/GameBootcampFromHome";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <MainContent/>
        <SubNav/>
        <GameBootcampFromHome/>
        {/* <useScrollDirection/> */}
        <QuestionRtan/>
        {children}
        
        <Footer/>
      </body>
    </html>
  );
}
