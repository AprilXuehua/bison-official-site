import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div
      className="bg-white min-h-screen"
      style={{ fontFamily: "var(--font-pretendard)" }}
    >
      <Header />
      <div className="h-[50px] md:h-[50px] lg:h-[75px]" />

      <main
        className="max-w-[1750px] mx-auto
        px-5 md:px-[65px] lg:px-[108px]
        py-[60px] md:py-[100px] lg:py-[180px]"
      >
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr] lg:gap-[30px] lg:items-start gap-[40px]">

          {/* 왼쪽: sticky 고정 패널 */}
          <div className="lg:sticky lg:top-[95px] flex flex-col gap-[24px] lg:gap-[32px]">
            <h1
              className="text-black font-bold leading-tight
                text-[40px] md:text-[50px] lg:text-[60px]"
              style={{ letterSpacing: "-0.05em" }}
            >
              문의하기
            </h1>

            <p
              className="text-black font-normal leading-snug
                text-[18px] md:text-[20px] lg:text-[24px]"
              style={{ letterSpacing: "-0.05em" }}
            >
              지속 가능한<br />
              스마트 팩토리를 위한<br />
              단 하나의 선택, BISON
            </p>

            <div className="flex flex-col gap-[2px] mt-[8px]">
              <p className="text-black font-normal" style={{ fontSize: "19px" }}>
                이메일
              </p>
              <p className="text-black font-bold" style={{ fontSize: "19px" }}>
                sales@bison0507.com
              </p>
            </div>
          </div>

          {/* 오른쪽: 폼 (스크롤) */}
          <ContactForm />
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
