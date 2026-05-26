import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[1080px] overflow-hidden">
      {/* 배경 이미지 */}
      <Image
        src="/images/hero-bg.jpg"
        alt="BISON 제조 AI 히어로 이미지"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* 그라디언트 오버레이: 위(투명) → 아래(#1a1a1a) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(49,49,49,0.1) 0%, rgba(26,26,26,1.0) 100%)",
        }}
      />

      {/* 콘텐츠 */}
      <div className="absolute inset-0 px-[163px]">
        {/* 헤드라인 — Figma y=394 */}
        <h1
          className="absolute text-white font-bold"
          style={{
            top: 394,
            left: 163,
            fontSize: 100,
            lineHeight: 1.19,
            letterSpacing: "-5px",
            fontFamily: "var(--font-pretendard)",
            whiteSpace: "pre-line",
          }}
        >
          {`예측하기 어려운\n제조 환경까지 학습 하는 AI`}
        </h1>

        {/* 서브텍스트 — Figma y=652 */}
        <p
          className="absolute text-white font-normal"
          style={{
            top: 652,
            left: 163,
            fontSize: 40,
            lineHeight: 1.2,
            letterSpacing: "-2px",
            fontFamily: "var(--font-pretendard)",
            whiteSpace: "pre-line",
          }}
        >
          {`우리는 정제된 데이터만 학습하지 않습니다.\n실제 제조 현장의 복잡한 변수까지 학습합니다.`}
        </p>

        {/* CTA 버튼 그룹 — Figma y=852, 가로 중앙 정렬 */}
        <div
          className="absolute flex items-center gap-[37px]"
          style={{ top: 852, left: "50%", transform: "translateX(-50%)" }}
        >
          {/* 왼쪽: 적용사례 */}
          <HeroButton href="/cases" label="적용사례" />
          {/* 오른쪽: 솔루션 소개 */}
          <HeroButton href="/solution" label="솔루션 소개" />
        </div>
      </div>
    </section>
  );
}

function HeroButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center gap-3 w-[300px] h-[80px] rounded-full text-white font-medium hover:bg-white/20 transition-colors"
      style={{
        fontSize: 30,
        fontFamily: "var(--font-pretendard)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      {label}
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
  );
}
