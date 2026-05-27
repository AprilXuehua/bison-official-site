import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Page() {
  return (
    <div className="bg-[#1a1a1a] min-h-screen" style={{ fontFamily: "var(--font-pretendard)" }}>
      <Header />
      <div className="h-[50px] md:h-[50px] lg:h-[75px]" />
      <main className="flex flex-col items-center justify-center min-h-[60vh]">
        <p className="text-white/30 text-xl md:text-2xl lg:text-3xl font-normal">
          회사소개 페이지 준비중
        </p>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
