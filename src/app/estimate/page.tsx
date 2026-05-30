import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import EstimateWizard from "@/components/EstimateWizard";

export default function Page() {
  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "var(--font-pretendard)" }}>
      <Header />
      <div className="h-[50px] md:h-[50px] lg:h-[75px]" />
      <main>
        <EstimateWizard />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
