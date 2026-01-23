import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import ConditionalHeader from "@/components/features/ConditionalHeader";
import ConditionalFooter from "@/components/features/ConditionalFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "새로지윤집",
  description: "Next.js와 Supabase 기반 웹 애플리케이션",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <ConditionalHeader />
          <main className="flex-grow">{children}</main>
          <ConditionalFooter />
        </div>
      </body>
    </html>
  );
}
