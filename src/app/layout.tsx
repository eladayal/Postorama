import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Postorama",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <body className="flex flex-col min-h-screen">
          <Header />
          <div className="container mx-auto flex-1 p-10">{children}</div>

          <Footer />
        </body>
      </html>
    </>
  );
}
