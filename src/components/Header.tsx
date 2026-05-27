"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "솔루션", href: "/solution" },
  { label: "적용사례", href: "/cases" },
  { label: "회사소개", href: "/about" },
  { label: "뉴스", href: "/news" },
  { label: "채용", href: "/careers" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 화면 커지면 메뉴 자동 닫기
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // 메뉴 열릴 때 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // 스크롤 감지 → 글라스모피즘 전환
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          h-[50px] md:h-[50px] lg:h-[75px] flex items-center
          ${scrolled ? "bg-[#1a1a1a]/70 backdrop-blur-md" : "bg-[#1a1a1a]"}`}
      >
        <div className="w-full flex items-center justify-between
          px-5 md:px-10 lg:px-[88px]">

          {/* 로고 */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/bison-logo.svg"
              alt="BISON"
              width={100}
              height={25}
              className="h-[12px] w-auto md:h-[14px] lg:h-[16px]"
              priority
            />
          </Link>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden lg:flex items-center gap-[30px]">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-white text-base font-normal hover:opacity-70 transition-opacity whitespace-nowrap"
                style={{ fontFamily: "var(--font-pretendard)" }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* 데스크탑 우측 CTA */}
          <div className="hidden lg:flex items-center gap-[30px]">
            <Link
              href="/contact"
              className="text-white text-base font-bold hover:opacity-70 transition-opacity whitespace-nowrap"
              style={{ fontFamily: "var(--font-pretendard)" }}
            >
              문의하기
            </Link>
            <Link
              href="/estimate"
              className="flex items-center justify-center gap-2 w-[140px] h-[36px] text-white text-sm font-bold whitespace-nowrap hover:opacity-80 transition-opacity"
              style={{
                fontFamily: "var(--font-pretendard)",
                backgroundColor: "#3775FF",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                borderRadius: "30px",
                letterSpacing: "-0.1em",
              }}
            >
              예상 견적 계산
              <ArrowIcon />
            </Link>
            <span
              className="text-white text-base font-normal cursor-pointer hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--font-pretendard)" }}
            >
              KOR
            </span>
          </div>

          {/* 모바일 오른쪽: KOR + 문의 + 햄버거 */}
          <div className="flex lg:hidden items-center gap-3">
            <span
              className="text-white text-xs md:text-sm font-normal cursor-pointer hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--font-pretendard)" }}
            >
              KOR
            </span>
            <Link
              href="/contact"
              className="text-white text-xs md:text-sm font-bold hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--font-pretendard)" }}
            >
              문의하기
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="메뉴 열기"
              className="text-white p-1"
            >
              {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* 모바일 전체화면 메뉴 */}
      <div
        className={`fixed inset-0 z-[100] bg-[#1a1a1a] flex flex-col transition-transform duration-300 ease-in-out lg:hidden
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* 메뉴 헤더 */}
        <div className="flex items-center justify-between px-5 md:px-10 h-[50px] md:h-[50px] border-b border-white/10">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/bison-logo.svg"
              alt="BISON"
              width={100}
              height={25}
              className="h-[12px] w-auto md:h-[14px]"
            />
          </Link>
          <button onClick={() => setMenuOpen(false)} aria-label="메뉴 닫기" className="text-white p-1">
            <CloseIcon />
          </button>
        </div>

        {/* 메뉴 링크들 */}
        <nav className="flex flex-col flex-1 justify-center items-center gap-10">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-[28px] md:text-[36px] font-normal hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--font-pretendard)" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* 하단 버튼 */}
        <div className="px-5 pb-12 flex flex-col gap-4">
          <Link
            href="/estimate"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-3 w-full h-[60px] rounded-full text-white text-xl font-bold"
            style={{
              fontFamily: "var(--font-pretendard)",
              backgroundColor: "rgba(62,62,62,0.5)",
            }}
          >
            예상 견적 계산 <ArrowIcon />
          </Link>
          <div className="text-center text-white/50 text-base" style={{ fontFamily: "var(--font-pretendard)" }}>
            KOR
          </div>
        </div>
      </div>
    </>
  );
}

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 6H21M3 12H21M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
