import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden
      h-[100vh] md:h-[600px] lg:h-[800px]
      min-h-[500px]">

      {/* 배경 이미지 */}
      <Image
        src="/images/hero-bg.jpg"
        alt="BISON 제조 AI 히어로 이미지"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* 그라디언트 오버레이 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(49,49,49,0.1) 0%, rgba(26,26,26,1.0) 100%)",
        }}
      />

      {/* 콘텐츠 — 하단 정렬 */}
      <div className="absolute inset-0 flex flex-col justify-end
        px-5 md:px-12 lg:px-[163px]
        pb-10 md:pb-12 lg:pb-[80px]">

        {/* 헤드라인 */}
        <h1
          className="text-white font-bold
            text-[38px] leading-[1.15] tracking-[-1.5px]
            md:text-[37px] md:leading-[1.15] md:tracking-[-1.5px]
            lg:text-[55px] lg:leading-[1.19] lg:tracking-[-2.5px]
            mb-4 md:mb-3 lg:mb-4"
          style={{ fontFamily: "var(--font-pretendard)" }}
        >
          예측하기 어려운<br />
          제조 환경까지 학습하는 AI
        </h1>

        {/* 서브텍스트 */}
        <p
          className="text-white font-normal
            text-[15px] leading-relaxed
            md:text-[19px] md:leading-relaxed
            lg:text-[25px] lg:leading-[1.2] lg:tracking-[-1px]
            mb-12 md:mb-8 lg:mb-10"
          style={{ fontFamily: "var(--font-pretendard)" }}
        >
          우리는 정제된 데이터만 학습하지 않습니다.<br />
          실제 제조 현장의 복잡한 변수까지 학습합니다.
        </p>

        {/* CTA 버튼 그룹 */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-[18px]">
          <HeroButton href="/cases" label="적용 사례 보기" showArrow={false} hoverClass="hover:bg-white hover:text-[#1a1a1a]" />
          <HeroButton href="/solution" label="솔루션 소개" hoverClass="hover:bg-white hover:text-[#1a1a1a]" />
        </div>
      </div>
    </section>
  );
}

function HeroButton({ href, label, showArrow = true, hoverClass = "hover:bg-white/20" }: { href: string; label: string; showArrow?: boolean; hoverClass?: string }) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center gap-2 text-white bg-white/10 transition-colors
        w-full md:w-[180px]
        h-[62px] md:h-[36px] lg:h-[48px]
        text-[18px] md:text-[12px] lg:text-[18px] font-medium
        ${hoverClass}`}
      style={{
        fontFamily: "var(--font-pretendard)",
        borderRadius: "25px",
        letterSpacing: "-0.1em",
      }}
    >
      {label}
      {showArrow && (
        <svg width="17" height="17" viewBox="0 0 14 14" fill="none">
          <path
            d="M1 7H13M13 7L7 1M13 7L7 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Link>
  );
}
