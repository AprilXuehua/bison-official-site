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
      <div className="max-w-[1920px] mx-auto px-[136px] py-[80px]">
        {/* 로고 */}
        <div className="mb-[76px]">
          <Image
            src="/images/bison-logo.svg"
            alt="BISON"
            width={200}
            height={50}
          />
        </div>

        {/* 회사 정보 */}
        <div className="flex flex-col gap-[23px] mb-[91px]">
          {COMPANY_INFO.map(({ label, value, href }) => (
            <div key={label} className="flex items-start gap-[170px]">
              <span className="text-white text-2xl font-bold leading-[30px] w-[180px] flex-shrink-0">
                {label}
              </span>
              {href ? (
                <a
                  href={href}
                  className="text-white text-2xl font-normal leading-[30px] hover:opacity-70 transition-opacity"
                >
                  {value}
                </a>
              ) : (
                <span className="text-white text-2xl font-normal leading-[30px]">
                  {value}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* 구분선 */}
        <div className="w-full h-px bg-white/20 mb-[42px]" />

        {/* 법적 고지 */}
        <p className="text-white text-xl font-normal leading-relaxed mb-[59px] max-w-[1630px]">
          {LEGAL_TEXT}
        </p>

        {/* 하단: 저작권 + 개인정보방침 */}
        <div className="flex items-center gap-[56px]">
          <span className="text-white text-xl font-normal">
            ⓒ 2026 BISON. All rights reserved.
          </span>
          <Link
            href="/privacy"
            className="text-white text-xl font-normal hover:opacity-70 transition-opacity"
          >
            개인정보방침
          </Link>
        </div>
      </div>
    </footer>
  );
}
