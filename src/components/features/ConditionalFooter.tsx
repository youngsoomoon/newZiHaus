"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();

  // 메인 페이지에서는 Footer 숨김
  if (pathname === "/") {
    return null;
  }

  return <Footer />;
}
