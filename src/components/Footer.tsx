import Image from "next/image";
import Link from "next/link";

const COMPANY_INFO = [
  {
    label: "본사",
    value: "18462 경기도 화성시 동탄영천로 150 현대실리콘앨리 B동 1013호",
  },
  {
    label: "기업부설연구소",
    value: "18462 경기도 화성시 동탄영천로 150 현대실리콘앨리 B동 1133호",
  },
  {
    label: "이메일",
    value: "sales@bison0507.com",
    href: "mailto:sales@bison0507.com",
  },
];

const LEGAL_TEXT =
  "본 서비스는 기업 고객을 대상으로 제공되며, 외부 기술·규격 및 지원 범위에 변동이 있을 수 있습니다. 제시 성능 수치는 고객 환경 및 공정 조건에 따라 상이할 수 있으며, 그에 상응하는 사후 관리에 의해 지속 적용됩니다. 기술자료, 이미지, 산출물 등은 협의된 목적 내에서만 활용 가능하며 임의 2차 배포는 제한됩니다.";

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#1a1a1a] text-white"
      style={{ fontFamily: "var(--font-pretendard)" }}
    >
      <div className="max-w-[1920px] mx-auto
        px-5 md:px-12 lg:px-[68px]
        pt-5 pb-4 md:pt-7 md:pb-5 lg:pt-[40px] lg:pb-[40px]">

        {/* 로고 */}
        <div className="mb-4 md:mb-6 lg:mb-[38px]">
          <Image
            src="/images/bison-logo.svg"
            alt="BISON"
            width={200}
            height={50}
            className="h-[15px] w-auto md:h-[19px] lg:h-[25px]"
          />
        </div>

        {/* 회사 정보 */}
        <div className="flex flex-col gap-2.5 md:gap-3 lg:gap-[12px]
          mb-4 md:mb-6 lg:mb-[46px]">
          {COMPANY_INFO.map(({ label, value, href }) => (
            <div key={label} className="flex flex-col md:flex-row md:items-start md:gap-[30px] lg:gap-[85px]">
              <span className="text-white font-bold mb-0.5 md:mb-0
                text-xs md:text-sm lg:text-base
                md:min-w-[110px] lg:min-w-[130px] w-auto flex-shrink-0">
                {label}
              </span>
              {href ? (
                <a
                  href={href}
                  className="text-white font-normal hover:opacity-70 transition-opacity
                    text-xs md:text-sm lg:text-base"
                >
                  {value}
                </a>
              ) : (
                <span className="text-white font-normal
                  text-xs md:text-sm lg:text-base">
                  {value}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* 구분선 */}
        <div className="w-full h-px bg-white/20
          mb-2.5 md:mb-4 lg:mb-[21px]" />

        {/* 법적 고지 */}
        <p className="text-white font-normal leading-relaxed
          text-[10px] md:text-xs lg:text-sm
          mb-3 md:mb-4 lg:mb-[30px]
          max-w-[1630px] text-white/70">
          {LEGAL_TEXT}
        </p>

        {/* 저작권 + 개인정보방침 */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-[28px]">
          <span className="text-white/60 text-[10px] md:text-xs lg:text-sm font-normal">
            ⓒ 2026 BISON. All rights reserved.
          </span>
          <Link
            href="/privacy"
            className="text-white/60 text-[10px] md:text-xs lg:text-sm font-normal hover:text-white transition-colors"
          >
            개인정보방침
          </Link>
        </div>
      </div>
    </footer>
  );
}
