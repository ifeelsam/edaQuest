import "@/app/globals.css";
import { Inter } from "next/font/google";
import Particles from "@/components/Particles";
import Header from "@/components/topbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EdaQuest Dashboard",
  description: "Educational Gaming Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen`}>
        <Particles />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

