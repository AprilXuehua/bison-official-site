import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientPartnerSection from "@/components/ClientPartnerSection";
import PlaceholderSection from "@/components/PlaceholderSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { fetchNews } from "@/lib/news";

export default async function Home() {
  const news = await fetchNews(6);

  return (
    <div className="bg-[#1a1a1a]">
      {/* 헤더 (fixed 고정) */}
      <Header />

      {/* 히어로 섹션 */}
      <HeroSection />

      {/* 파트너 & 클라이언트 섹션 */}
      <ClientPartnerSection />

      {/* 임시 컨테이너 (피그마 플레이스홀더) */}
      <PlaceholderSection />

      {/* 뉴스 섹션 */}
      <NewsSection news={news} />

      {/* 푸터 */}
      <Footer />

      {/* 맨위로가기 버튼 */}
      <ScrollToTop />
    </div>
  );
}
