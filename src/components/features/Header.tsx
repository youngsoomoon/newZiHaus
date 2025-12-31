"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "소개", href: "/about" },
  { name: "포트폴리오", href: "/portfolio" },
  { name: "컨설팅", href: "/consulting" },
  { name: "컨택", href: "/contact" },
  { name: "게시판", href: "/board" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* 로고 */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-xl font-bold text-gray-900">
            새로지윤집
          </div>
        </Link>

        {/* 네비게이션 메뉴 */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gray-900",
                pathname === item.href
                  ? "text-gray-900"
                  : "text-gray-600"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* 모바일 메뉴 버튼 (추후 구현) */}
        <button className="md:hidden p-2">
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>
    </header>
  );
}
