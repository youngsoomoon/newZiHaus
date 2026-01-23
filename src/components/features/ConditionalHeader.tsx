"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function ConditionalHeader() {
  const pathname = usePathname();

  // 메인 페이지에서는 Header 숨김 (HeroSlider에 통합됨)
  if (pathname === "/") {
    return null;
  }

  return <Header />;
}
