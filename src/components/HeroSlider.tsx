"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

const navigation = [
  {
    name: "소개",
    href: "/about",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "포트폴리오",
    href: "/portfolio",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    name: "컨설팅",
    href: "/consulting",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    name: "컨택",
    href: "/contact",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "게시판",
    href: "/board",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80",
    location: "서울시 은평구 응암동",
    size: "32평",
    workType: "전체 공사",
    cost: "6,000만원대",
    duration: "8주",
    style: "모던 미니멀",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
    location: "경기도 성남시 분당구",
    size: "45평",
    workType: "주방·거실 공사",
    cost: "4,500만원대",
    duration: "6주",
    style: "내추럴 우드",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80",
    location: "서울시 강남구 대치동",
    size: "28평",
    workType: "전체 공사",
    cost: "5,200만원대",
    duration: "7주",
    style: "클래식 모던",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    location: "서울시 마포구 연남동",
    size: "24평",
    workType: "욕실·주방 공사",
    cost: "3,800만원대",
    duration: "5주",
    style: "북유럽 스타일",
  },
];

const SLIDE_DURATION = 5000;

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const slideRef = useRef<NodeJS.Timeout | null>(null);

  const resetProgress = useCallback(() => {
    setProgress(0);
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    resetProgress();
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning, resetProgress]);

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  // Progress bar animation
  useEffect(() => {
    const progressInterval = 50; // Update every 50ms for smooth animation
    const increment = (progressInterval / SLIDE_DURATION) * 100;

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return prev;
        }
        return prev + increment;
      });
    }, progressInterval);

    return () => {
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    };
  }, [currentIndex]);

  // Auto slide when progress reaches 100
  useEffect(() => {
    if (progress >= 100 && !isTransitioning) {
      slideRef.current = setTimeout(() => {
        goToNext();
      }, 100);
    }

    return () => {
      if (slideRef.current) {
        clearTimeout(slideRef.current);
      }
    };
  }, [progress, isTransitioning, goToNext]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Top Navigation */}
      <div className="absolute top-0 left-0 right-0 z-30 px-4 md:px-12 lg:px-16 py-5 md:py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white text-xl md:text-2xl lg:text-3xl font-bold z-50">
            새로지윤집
          </Link>

          {/* Desktop Navigation Icons */}
          <div className="hidden md:flex items-center gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative flex items-center justify-center w-12 h-12 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <span className="[&>svg]:w-6 [&>svg]:h-6">{item.icon}</span>
                {/* Tooltip */}
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-3 py-1.5 text-sm font-medium text-gray-900 bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="메뉴 열기/닫기"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide from right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-40 bg-black/80 backdrop-blur-md transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col pt-24 px-6 gap-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-3 text-white/90 text-base font-medium hover:text-white transition-colors border-b border-white/10"
            >
              <span className="[&>svg]:w-5 [&>svg]:h-5 text-white/50">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[35] bg-black/30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Overlay - lighter for better image visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Content - positioned at bottom left */}
          <div className="absolute bottom-32 left-8 md:left-16 lg:left-24 z-10">
            <div className="text-white">
              {/* Location */}
              <h1
                className={`text-xl md:text-2xl lg:text-3xl font-semibold mb-3 transition-all duration-700 ${
                  index === currentIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: index === currentIndex ? "300ms" : "0ms" }}
              >
                {slide.location}
              </h1>
              {/* Details */}
              <div
                className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-sm md:text-base text-white/90 transition-all duration-700 ${
                  index === currentIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: index === currentIndex ? "450ms" : "0ms" }}
              >
                <span>{slide.size}</span>
                <span className="text-white/40">|</span>
                <span>{slide.workType}</span>
                <span className="text-white/40">|</span>
                <span className="font-medium">{slide.cost}</span>
              </div>
              {/* Tags */}
              <div
                className={`flex gap-2 mt-3 transition-all duration-700 ${
                  index === currentIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: index === currentIndex ? "600ms" : "0ms" }}
              >
                <span className="px-2 py-1 text-xs bg-white/20 backdrop-blur-sm rounded">
                  {slide.style}
                </span>
                <span className="px-2 py-1 text-xs bg-white/20 backdrop-blur-sm rounded">
                  공사기간 {slide.duration}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Progress Bar - Center */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-4">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="flex items-center justify-center w-10 h-10 text-white/70 hover:text-white transition-colors"
            aria-label="이전 이미지"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Progress Bar */}
          <div className="w-24 md:w-32 h-[2px] bg-white/20 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-white transition-none"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="flex items-center justify-center w-10 h-10 text-white/70 hover:text-white transition-colors"
            aria-label="다음 이미지"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Counter */}
          <div className="text-white/70 text-sm font-light tracking-wider ml-2">
            <span className="text-white">{String(currentIndex + 1).padStart(2, "0")}</span>
            <span className="mx-1">/</span>
            <span>{String(slides.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
