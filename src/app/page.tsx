import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientPartnerSection from "@/components/ClientPartnerSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="bg-[#1a1a1a]">
      {/* 히어로 섹션 (헤더가 절대 위치로 히어로 위에 올라감) */}
      <div className="relative">
        <Header />
        <HeroSection />
      </div>

      {/* 파트너 & 클라이언트 섹션 */}
      <ClientPartnerSection />

      {/* 푸터 */}
      <Footer />

      {/* 맨위로가기 버튼 */}
      <ScrollToTop />
    </div>
  );
}
