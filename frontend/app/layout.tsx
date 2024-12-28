import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "edaQuest",
  description: "a simple web app for learnign with games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
