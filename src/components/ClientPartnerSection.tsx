import Image from "next/image";

const CLIENT_LOGOS = [
  { src: "/images/dyauto.png",    alt: "DY오토",  width: 300, height: 113, heightClass: "max-h-[15px] md:max-h-[15px] lg:max-h-[40px]" },
  { src: "/images/lk-samsung.png",alt: "LK삼양",  width: 259, height: 77, heightClass: "max-h-[15px] md:max-h-[15px] lg:max-h-[28px]"  },
  { src: "/images/jinhap.png",    alt: "진합",    width: 300, height: 130 },
  { src: "/images/imk.png",       alt: "IMK",     width: 111, height: 95  },
];

const PARTNER_LOGOS = [
  { src: "/images/gyeonggi-innovation.png", alt: "경기창조혁신센터", width: 515, height: 92, heightClass: "max-h-[15px] md:max-h-[9px] lg:max-h-[21px]" },
  { src: "/images/sungkyunkwan.png",         alt: "성균관대학교",    width: 405, height: 110 },
  { src: "/images/kyonggi.png",              alt: "경기대학교",      width: 300, height: 112, heightClass: "max-h-[15px] md:max-h-[9px] lg:max-h-[30px]" },
  { src: "/images/naratech.png",             alt: "나라테크",        width: 405, height: 100 },
];

interface LogoItem { src: string; alt: string; width: number; height: number; heightClass?: string; }

function LogoGroup({ label, logos }: { label: string; logos: LogoItem[] }) {
  return (
    <div className="flex items-center gap-[23px] md:gap-[34px] lg:gap-[60px] flex-shrink-0">
      <span
        className="text-[#1a1a1a] font-bold flex-shrink-0
          text-sm md:text-[17px] lg:text-[20px]"
        style={{ fontFamily: "var(--font-pretendard)" }}
      >
        {label}
      </span>
      {logos.map((logo) => (
        <div
          key={logo.alt}
          className="flex items-center justify-center flex-shrink-0
            grayscale opacity-50"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className={`object-contain w-auto ${logo.heightClass ?? "max-h-[15px] md:max-h-[15px] lg:max-h-[35px]"}`}
          />
        </div>
      ))}
    </div>
  );
}

export default function ClientPartnerSection() {
  return (
    <section className="w-full bg-white overflow-hidden
      py-[18px] md:py-[23px] lg:py-[20px]">
      <div className="flex items-center">
        <div className="marquee-track flex items-center gap-[29px] md:gap-[46px] lg:gap-[60px]">
          {/* 복사본 1 */}
          <LogoGroup label="Client"  logos={CLIENT_LOGOS}  />
          <Divider />
          <LogoGroup label="Partner" logos={PARTNER_LOGOS} />
          <Divider />
          {/* 복사본 2 — 무한 루프 */}
          <LogoGroup label="Client"  logos={CLIENT_LOGOS}  />
          <Divider />
          <LogoGroup label="Partner" logos={PARTNER_LOGOS} />
        </div>
      </div>
    </section>
  );
}

function Divider() {
  return <div className="w-px h-[29px] md:h-[36px] lg:h-[43px] bg-gray-200 flex-shrink-0" />;
}
