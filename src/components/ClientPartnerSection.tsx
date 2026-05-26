import Image from "next/image";

const CLIENT_LOGOS = [
  { src: "/images/dyauto.png", alt: "DY오토", width: 300, height: 113 },
  { src: "/images/lk-samsung.png", alt: "LK삼양", width: 259, height: 77 },
  { src: "/images/jinhap.png", alt: "진합", width: 300, height: 130 },
  { src: "/images/imk.png", alt: "IMK", width: 111, height: 95 },
];

const PARTNER_LOGOS = [
  {
    src: "/images/gyeonggi-innovation.png",
    alt: "경기창조혁신센터",
    width: 515,
    height: 92,
  },
  {
    src: "/images/sungkyunkwan.png",
    alt: "성균관대학교",
    width: 405,
    height: 110,
  },
  {
    src: "/images/kyonggi.png",
    alt: "경기대학교",
    width: 300,
    height: 112,
  },
  {
    src: "/images/naratech.png",
    alt: "나라테크",
    width: 405,
    height: 100,
  },
];

interface LogoItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

function LogoGroup({
  label,
  logos,
}: {
  label: string;
  logos: LogoItem[];
}) {
  return (
    <div className="flex items-center gap-[60px] flex-shrink-0">
      {/* 그룹 레이블 */}
      <span
        className="text-[#1a1a1a] text-[40px] font-bold flex-shrink-0"
        style={{ fontFamily: "var(--font-pretendard)" }}
      >
        {label}
      </span>
      {/* 로고들 */}
      {logos.map((logo) => (
        <div
          key={logo.alt}
          className="flex items-center justify-center flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          style={{ height: 120 }}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="object-contain max-h-[100px] w-auto"
          />
        </div>
      ))}
    </div>
  );
}

export default function ClientPartnerSection() {
  return (
    <section className="w-full bg-white overflow-hidden py-[40px]">
      {/* 마키 트랙: 내용을 2배 복제해서 무한 루프 */}
      <div className="flex items-center">
        <div className="marquee-track flex items-center gap-[80px]">
          {/* 복사본 1 */}
          <LogoGroup label="Client" logos={CLIENT_LOGOS} />
          <div className="w-px h-[60px] bg-gray-200 flex-shrink-0" />
          <LogoGroup label="Partner" logos={PARTNER_LOGOS} />
          <div className="w-[80px] flex-shrink-0" />

          {/* 복사본 2 (무한 루프용) */}
          <LogoGroup label="Client" logos={CLIENT_LOGOS} />
          <div className="w-px h-[60px] bg-gray-200 flex-shrink-0" />
          <LogoGroup label="Partner" logos={PARTNER_LOGOS} />
          <div className="w-[80px] flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}
