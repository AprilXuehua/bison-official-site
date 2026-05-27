export default function NewsSection() {
  return (
    <section
      className="w-full bg-white"
      style={{ fontFamily: "var(--font-pretendard)" }}
    >
      <div className="max-w-[1620px] mx-auto text-center
        px-5 md:px-12 lg:px-0
        pt-[50px] md:pt-[65px] lg:pt-[85px]
        pb-[80px] md:pb-[120px] lg:pb-[160px]">

        {/* 섹션 라벨 */}
        <p
          className="font-normal
            text-[13px] md:text-[18px] lg:text-[20px]
            mb-2 md:mb-2 lg:mb-3"
          style={{ color: "#3775FF", letterSpacing: "-0.1em" }}
        >
          NEWS
        </p>

        {/* 섹션 타이틀 */}
        <h2
          className="text-[#1a1a1a] font-bold
            text-[22px] md:text-[32px] lg:text-[45px]
            leading-tight"
          style={{ letterSpacing: "-0.05em" }}
        >
          BISON의 최신 소식을 전달해 드립니다.
        </h2>

      </div>
    </section>
  );
}
