import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { fetchNews, formatNewsDate } from "@/lib/news";
import type { NewsItem } from "@/lib/news";

export default async function NewsPage() {
  const news = await fetchNews();

  return (
    <div
      className="bg-[#1a1a1a] min-h-screen"
      style={{ fontFamily: "var(--font-pretendard)" }}
    >
      <Header />
      <div className="h-[50px] md:h-[50px] lg:h-[75px]" />

      <main className="max-w-[1750px] mx-auto px-5 md:px-12 lg:px-[85px] pt-[60px] pb-[120px]">
        {/* 페이지 헤더 */}
        <div className="text-center mb-[60px] lg:mb-[80px]">
          <p
            className="font-normal text-[13px] md:text-[18px] lg:text-[24px] mb-2 lg:mb-3"
            style={{ color: "#3775FF", letterSpacing: "-0.05em" }}
          >
            NEWS
          </p>
          <h1
            className="text-white font-bold text-[22px] md:text-[32px] lg:text-[36px] leading-tight"
            style={{ letterSpacing: "-0.05em" }}
          >
            BISON의 최신 소식을 전달해 드립니다.
          </h1>
        </div>

        {/* 뉴스 그리드 */}
        {news.length === 0 ? (
          <p className="text-white/30 text-center text-[18px]">
            등록된 뉴스가 없습니다.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[32px] lg:gap-[48px]">
            {news.map((item) => (
              <NewsPageCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

function NewsPageCard({ item }: { item: NewsItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block w-full rounded-[18px] overflow-hidden cursor-pointer group"
      style={{ height: "240px" }}
    >
      {/* 기본 배경 (그라디언트) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3775ff] to-[#d7e3ff]" />

      {/* thumbnail 없을 때 BISON 로고 */}
      {!item.thumbnail && (
        <img
          src="/images/bison-logo.svg"
          alt="BISON"
          className="absolute"
          style={{
            left: "50%",
            top: "38%",
            transform: "translateX(-50%) translateY(-50%)",
            width: "120px",
            height: "30px",
          }}
        />
      )}

      {/* 썸네일 이미지 */}
      {item.thumbnail && (
        <img
          src={item.thumbnail}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      )}

      {/* frosted glass 텍스트 패널 */}
      <div
        className="absolute rounded-[14px]"
        style={{
          left: "13px",
          right: "13px",
          bottom: "13px",
          padding: "14px 16px 12px",
          backdropFilter: "blur(9px)",
          backgroundColor: "rgba(255,255,255,0.3)",
        }}
      >
        <p
          className="font-bold text-black leading-tight mb-2"
          style={{ fontSize: "17px", letterSpacing: "-0.84px" }}
        >
          {item.title}
        </p>
        <p className="text-black text-right" style={{ fontSize: "12px" }}>
          {formatNewsDate(item.published_at)}
        </p>
      </div>
    </a>
  );
}
