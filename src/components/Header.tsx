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
  return (
    <header className="absolute top-0 left-0 right-0 z-50 h-[150px] bg-[#1a1a1a] flex items-center">
      <div className="w-full px-[88px] flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/bison-logo.svg"
            alt="BISON"
            width={100}
            height={25}
            priority
          />
        </Link>

        {/* 네비게이터 */}
        <nav className="flex items-center gap-[50px]">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-white text-2xl font-normal leading-[29px] hover:opacity-70 transition-opacity whitespace-nowrap"
              style={{ fontFamily: "var(--font-pretendard)" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* 우측: 문의하기 + 견적 버튼 + KOR */}
        <div className="flex items-center gap-[50px]">
          <Link
            href="/contact"
            className="text-white text-2xl font-bold leading-[29px] hover:opacity-70 transition-opacity whitespace-nowrap"
            style={{ fontFamily: "var(--font-pretendard)" }}
          >
            문의하기
          </Link>

          <Link
            href="/estimate"
            className="flex items-center justify-center gap-3 w-[200px] h-[60px] rounded-full text-white text-2xl font-bold whitespace-nowrap hover:opacity-80 transition-opacity"
            style={{
              fontFamily: "var(--font-pretendard)",
              backgroundColor: "rgba(62, 62, 62, 0.3)",
            }}
          >
            예상 견적 계산
            {/* Arrow icon */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7H13M13 7L7 1M13 7L7 13"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <span
            className="text-white text-2xl font-normal leading-[29px] cursor-pointer hover:opacity-70 transition-opacity"
            style={{ fontFamily: "var(--font-pretendard)" }}
          >
            KOR
          </span>
        </div>
      </div>
    </header>
  );
}
