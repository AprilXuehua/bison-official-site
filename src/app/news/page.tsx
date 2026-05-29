import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import NewsPagination from "@/components/NewsPagination";
import { fetchNews } from "@/lib/news";

export default async function NewsPage() {
  const news = await fetchNews();

  return (
    <div
      className="bg-[#ffffff] min-h-screen"
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
            className="text-black font-bold text-[22px] md:text-[32px] lg:text-[36px] leading-tight"
            style={{ letterSpacing: "-0.05em" }}
          >
            BISON의 최신 소식을 전달해 드립니다.
          </h1>
        </div>

        {/* 뉴스 그리드 + 페이지네이션 */}
        <NewsPagination news={news} />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
