import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden
      h-screen md:h-[800px] lg:h-[1080px]
      min-h-[580px]">

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
        pb-12 md:pb-16 lg:pb-[128px]">

        {/* 헤드라인 */}
        <h1
          className="text-white font-bold
            text-[38px] leading-[1.15] tracking-[-1.5px]
            md:text-[64px] md:leading-[1.15] md:tracking-[-3px]
            lg:text-[100px] lg:leading-[1.19] lg:tracking-[-5px]
            mb-4 md:mb-6 lg:mb-8"
          style={{ fontFamily: "var(--font-pretendard)" }}
        >
          예측하기 어려운<br />
          제조 환경까지 학습 하는 AI
        </h1>

        {/* 서브텍스트 */}
        <p
          className="text-white font-normal
            text-[15px] leading-relaxed
            md:text-[24px] md:leading-relaxed
            lg:text-[40px] lg:leading-[1.2] lg:tracking-[-2px]
            mb-8 md:mb-10 lg:mb-12"
          style={{ fontFamily: "var(--font-pretendard)" }}
        >
          우리는 정제된 데이터만 학습하지 않습니다.<br />
          실제 제조 현장의 복잡한 변수까지 학습합니다.
        </p>

        {/* CTA 버튼 그룹 */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-[37px]">
          <HeroButton href="/cases" label="적용사례" />
          <HeroButton href="/solution" label="솔루션 소개" />
        </div>
      </div>
    </section>
  );
}

function HeroButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center gap-3 rounded-full text-white font-medium hover:bg-white/20 transition-colors
        w-full sm:w-[220px] lg:w-[300px]
        h-[52px] lg:h-[80px]
        text-[15px] lg:text-[30px]"
      style={{
        fontFamily: "var(--font-pretendard)",
        backgroundColor: "rgba(255,255,255,0.1)",
      }}
    >
      {label}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M1 7H13M13 7L7 1M13 7L7 13"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
